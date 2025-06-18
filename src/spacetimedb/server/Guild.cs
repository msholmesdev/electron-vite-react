using SpacetimeDB;

public static partial class Module
{
    [Table(Name = "guild", Public = true)]
    public partial class Guild
    {
        [PrimaryKey, AutoInc]
        public ulong GuildToken;
        [SpacetimeDB.Index.BTree]
        public ulong GameToken;
        public Guilds Representative;
        [SpacetimeDB.Index.BTree]
        public byte X;
        [SpacetimeDB.Index.BTree]
        public byte Y;
    }

    public static ulong? DidWin(ReducerContext ctx, ulong gameToken)
    {
        var guilds = ctx.Db.guild.GameToken.Filter(gameToken);

        return null;
    }

    public static void UpdateGuild(ReducerContext ctx, Guild guild)
    {
        ctx.Db.guild.GuildToken.Update(guild);
    }
    
        public static void InitializeRepresentatives(ReducerContext ctx, ulong gameToken)
    {
        byte index = 0;
        foreach (var guild in Enum.GetValues<Guilds>())
        {
            index++;
            ctx.Db.guild.Insert(
               new Guild
               {
                   GameToken = gameToken,
                   Representative = guild,
                   X = index,
                   Y = 9,
               }
           );
            ctx.Db.guild.Insert(
               new Guild
               {
                   GameToken = gameToken,
                   Representative = guild,
                   X = index,
                   Y = 10,
               }
           );
        }
    }
}