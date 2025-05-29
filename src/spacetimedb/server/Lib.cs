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

    /// Takes a name and checks if it's acceptable as a user's name.
    private static string ValidateName(string name)
    {
        if (string.IsNullOrEmpty(name))
        {
            throw new Exception("Names must not be empty");
        }
        return name;
    }

    [Reducer(ReducerKind.ClientConnected)]
    public static void ClientConnected(ReducerContext ctx)
    {
        Log.Info($"Connect {ctx.Sender}");
        
    }

    [Reducer(ReducerKind.ClientDisconnected)]
    public static void ClientDisconnected(ReducerContext ctx)
    {
        // LobbyDisconnect(ctx, );
    }

}