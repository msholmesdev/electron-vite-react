using SpacetimeDB;

public static partial class Module
{
    public static Identity? GetVerifiedCardOwnerIdentity(ReducerContext ctx, ulong cardToken)
    {
        var card = ctx.Db.card.CardToken.Find(cardToken);
        if (card is null)
        {
            // handle card does not exist
            return null;
        }

        var lobbyToken = card.LobbyToken;

        if (lobbyToken is null)
        {
            // handle card is not in player hand
            return null;
        }

        var lobbySecret = ctx.Db.lobby_secret.LobbyToken.Find(lobbyToken.Value);

        if (lobbySecret is null)
        {
            return null;
        }

        if (lobbySecret.Player != ctx.Sender)
        {
            // handle "illegal" call to get verification
            return null;
        }

        return lobbySecret.Player;
    }
}