using SpacetimeDB;
public static partial class Module
{
    [Type]
    public enum Guilds
    {
        Farmer,
        Gamer,
        GoldDigger,
        Intern,
        Karen,
        Lawyer,
        Pirate,
        Politician,
        TaxiDriver,
        Thief
    }

    [Type]
    public enum Locations
    {
        Unemployed,
        Company,
        Resume
    }

    [Type]
    public enum Turn
    {
        Interview,
        Hire,
        Manage
    }


    [Reducer(ReducerKind.ClientConnected)]
    public static void ClientConnected(ReducerContext ctx)
    {
        //Log.Info($"Connect {ctx.Sender}");

    }

    [Reducer(ReducerKind.ClientDisconnected)]
    public static void ClientDisconnected(ReducerContext ctx)
    {
        // LobbyDisconnect(ctx, );
    }
    
        [Reducer]
    public static void ServerLog(ReducerContext ctx, string logMessage)
    {
         Log.Info($"logging message: {logMessage}");
    }

}