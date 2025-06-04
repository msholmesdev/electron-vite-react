using SpacetimeDB;

public static partial class Module
{
    [Reducer]
    public static void PlayCard(ReducerContext ctx, ulong cardToken, ulong lobbyToken)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, cardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }
    }

    [Reducer]
    public static void GoldDigger(ReducerContext ctx, ulong cardToken, ulong lobbyToken)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, cardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }

        AddCardsFromUnemployedToResume(ctx, lobbyToken, 2);
    }

    [Reducer]
    public static void Pirate(ReducerContext ctx, ulong yourCardToken, ulong anotherCardToken, ulong lobbyToken)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, yourCardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }

        var anotherCard = CardInAnyCompany(ctx, anotherCardToken);

        if (anotherCard is null)
        {
            // bad card selected from another company
            return;
        }

        anotherCard.LobbyToken = lobbyToken;
        anotherCard.Location = Locations.Resume;
    }

    [Reducer]
    public static void Politician(ReducerContext ctx, ulong cardToken, ulong lobbyToken)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, cardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }
    }

    [Reducer]
    public static void Intern(ReducerContext ctx, ulong cardToken, ulong cardToReactivateToken, ulong lobbyToken)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, cardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }

        var cardToReactivate = ctx.Db.card.CardToken.Find(cardToReactivateToken);

        if (cardToReactivate is null || cardToReactivate.isUsed == false)
        {
            // handle card is null or already ready to use
            return;
        }

        cardToReactivate.isUsed = false;
        validCard.isUsed = true;
    }

    [Reducer]
    public static void Farmer(ReducerContext ctx, ulong cardToken, ulong lobbyToken)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, cardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }

        AddCardsFromUnemployedToCompany(ctx, lobbyToken, 1);
        validCard.isUsed = true;
    }

    [Reducer]
    public static void Lawyer(ReducerContext ctx, ulong cardToken, ulong lobbyToken, ulong cardTokenFromResumeToCompany1, ulong cardTokenFromResumeToCompany2)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, cardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }

        AddCardFromResumeToCompany(ctx, cardTokenFromResumeToCompany1);
        AddCardFromResumeToCompany(ctx, cardTokenFromResumeToCompany2);
        validCard.isUsed = true;
    }
}