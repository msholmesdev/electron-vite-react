using SpacetimeDB;

public static partial class Module
{
    public static bool MoveRepresentativeUp(ReducerContext ctx, ulong guildToken)
    {
        var topY = 10;
        var guild = ctx.Db.guild.GuildToken.Find(guildToken);
        if (guild is null || guild.Y == topY)
        {
            return false;
        }

        var guildsAbove = ctx.Db.guild.GameToken.Filter(guild.GameToken).Where((guildF) => guildF.X == guild.X && guildF.Y == guild.Y + 1);
        var guildsAboveList = guildsAbove.ToList();

        if (guildsAboveList is null || guildsAboveList.Count == 0 || guildsAboveList.Count > 1)
        {
            // handle bad guild search
            return false;
        }

        var guildAbove = guildsAboveList.First();

        if (guildAbove is null)
        {
            return false;
        }

        guildAbove.Y -= 1;
        guild.Y += 1;

        return true;
    }

    public static bool MoveRepresentativeDown(ReducerContext ctx, ulong guildToken)
    {
        var bottomY = 0;
        var guild = ctx.Db.guild.GuildToken.Find(guildToken);
        if (guild is null || guild.Y == bottomY)
        {
            return false;
        }

        var guildsBelow = ctx.Db.guild.GameToken.Filter(guild.GameToken).Where((guildF) => guildF.X == guild.X && guildF.Y == guild.Y - 1);
        var guildsBelowList = guildsBelow.ToList();

        if (guildsBelowList is null || guildsBelowList.Count == 0 || guildsBelowList.Count > 1)
        {
            // handle bad guild search
            return false;
        }

        var guildBelow = guildsBelowList.First();

        if (guildBelow is null)
        {
            return false;
        }

        guildBelow.Y += 1;
        guild.Y -= 1;

        return true;
    }

    public static bool MoveBottomRepresentativeOfX1ToX2(ReducerContext ctx, byte x1, byte x2) {
        var guildsInX1 = ctx.Db.guild.X.Filter(x1).ToList();
        var guildsInX2 = ctx.Db.guild.X.Filter(x2).ToList();

        if (guildsInX1 is null || guildsInX2 is null || guildsInX1.Count == 0 || guildsInX2.Count == 0 || guildsInX2.Count == 10)
        {
            return false;
        }

        var minGuildInX1 = guildsInX1.OrderBy(guild => guild.Y).First();
        var minGuildValueInX2 = guildsInX2.Min(guild => guild.Y);

        if (minGuildInX1 is null)
        {
            return false;
        }

        minGuildInX1.X = x2;
        minGuildInX1.Y = --minGuildValueInX2;

        return true;
    }
}