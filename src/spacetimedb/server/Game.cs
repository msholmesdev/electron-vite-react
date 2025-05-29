using SpacetimeDB;

// #pragma warning disable STDB_UNSTABLE
public static partial class Module
{

/*
    [ClientVisibilityFilter]
    public static readonly Filter GAME_FILTER = new Filter.Sql(
        "SELECT * FROM game JOIN game_secrets ON game.GameToken = game_secrets.GameToken WHERE HasStarted = true"
    );
    */

    [Table(Name = "game", Public = true)]
    public partial class Game
    {
        [PrimaryKey, AutoInc]
        public ulong GameToken;
        public  string? Name;
        public byte MaxPlayers;
        public bool IsPrivate = false;
    }

    [Table(Name = "game_secrets", Public = false)]
    public partial class GameSecrets
    {
        [PrimaryKey]
        public  ulong GameToken;
        public  Identity Host;
        public  Timestamp StartTime;
        public byte? CurrentTurnPosition;
        public bool IsActive = true;
        public bool HasStarted = false;
    }

    [Table(Name = "lobby", Public = true)]
    public partial class Lobby
    {
        [PrimaryKey, AutoInc]
        public ulong LobbyToken;
        [SpacetimeDB.Index.BTree]
        public  ulong GameToken;
        public bool IsConnected;
        public bool IsReady = false;
    }

    [Table(Name = "lobby_secrets", Public = false)]
    public partial class LobbySecrets
    {
        [PrimaryKey]
        public  ulong LobbyToken;
        [SpacetimeDB.Index.BTree]
        public  Identity Player;
        [SpacetimeDB.Index.BTree]
        public  ulong GameToken;
        public bool isBanned = false;
    }

    [Reducer]
    public static void RemoveSelfFromLobby(ReducerContext ctx, ulong gameToken)
    {
        var playerSecretLobbies = ctx.Db.lobby_secrets.GameToken
                                    .Filter(gameToken).Where(Lobby => Lobby.Player == ctx.Sender);
        var playerSecretLobby = playerSecretLobbies.First();
        if (playerSecretLobby is not null)
        {
            var playerLobby = ctx.Db.lobby.LobbyToken.Find(playerSecretLobby.LobbyToken);
            if (playerLobby is not null)
            {
                ctx.Db.lobby.Delete(playerLobby);
                ctx.Db.lobby_secrets.Delete(playerSecretLobby);
            }
            
        }
    }
    
    public static void DisconnectPlayerFromLobbies(ReducerContext ctx)
    {
        var playerSecretLobbies = ctx.Db.lobby_secrets.Player.Filter(ctx.Sender);

        if (playerSecretLobbies is not null)
        {
            foreach (var secretLobby in playerSecretLobbies)
            {
                var lobby = ctx.Db.lobby.LobbyToken.Find(secretLobby.LobbyToken);
                if (lobby is not null)
                {
                    lobby.IsConnected = false;
                }
            }
        }
    }

    public static IEnumerable<Lobby>? GetLobbies(ReducerContext ctx, ulong gameToken)
    {
        var lobby = ctx.Db.lobby.GameToken.Filter(gameToken);
        if (lobby is null)
        {
            return null;
        }

        return lobby;
    }

    public static void LobbyDisconnect(ReducerContext ctx, ulong gameToken)
    {
        CloseLobby(ctx, gameToken);
        // if game is started disconnect, otherwise delete
        RemoveSelfFromLobby(ctx, gameToken);
    }

    [Reducer]
    public static void JoinLobby(ReducerContext ctx, ulong gameToken)
    {
        RemoveSelfFromLobby(ctx, gameToken);

        byte maxPlayers = (ctx.Db.game.GameToken.Find(gameToken)?.MaxPlayers) ?? throw new KeyNotFoundException("Host does not exist");
        int currentPlayers = ctx.Db.lobby.GameToken.Filter(gameToken).Count();
        if (!(currentPlayers < maxPlayers))
        {
            throw new InvalidOperationException("The lobby is full.");
        }
        var row = ctx.Db.lobby.Insert(new Lobby
        {
            GameToken = gameToken
        });

        ctx.Db.lobby_secrets.Insert(new LobbySecrets
        {
            LobbyToken = row.LobbyToken,
            Player = ctx.Sender,
            GameToken = gameToken
        });
    }

    [Reducer]
    public static void CloseLobby(ReducerContext ctx, ulong gameToken)
    {
        var gameSecret = ctx.Db.game_secrets.GameToken.Find(gameToken);
        var game = ctx.Db.game.GameToken.Find(gameToken);

        var lobbies = GetLobbies(ctx, gameToken);

        if (lobbies is not null)
        {
            foreach (var lobby in lobbies)
            {
                var lobbySecret = ctx.Db.lobby_secrets.LobbyToken.Find(lobby.LobbyToken);
                if (lobbySecret is not null)
                {
                    ctx.Db.lobby_secrets.Delete(lobbySecret);
                }
                ctx.Db.lobby.Delete(lobby);
            }
        }

        if (gameSecret is not null)
        {
            ctx.Db.game_secrets.Delete(gameSecret);
        }

        if (game is not null)
        {
            ctx.Db.game.Delete(game);
        }
    }

    [Reducer]
    public static void StartLobby(ReducerContext ctx, string name, byte maxPlayers, bool isPrivate = false)
    {
        name = ValidateName(name);
        bool playerCountValid = maxPlayers > 1 && maxPlayers < 7;

        if (playerCountValid && name is not null)
        {
            var row = ctx.Db.game.Insert(
                new Game
                {
                    Name = name,
                    MaxPlayers = maxPlayers,
                    IsPrivate = isPrivate,
                }
            );

            ctx.Db.game_secrets.Insert(
                new GameSecrets
                {
                    GameToken = row.GameToken,
                    Host = ctx.Sender,
                    StartTime = ctx.Timestamp,
                }
            );

            JoinLobby(ctx, row.GameToken);
        }
    }
}