using SpacetimeDB;

public static partial class Module
{
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
        UseAndUpdateCard(ctx, validCard);
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
        UpdateCard(ctx, anotherCard);
        UseAndUpdateCard(ctx, validCard);
    }

    [Reducer]
    public static void Politician(ReducerContext ctx, ulong playCardToken, ulong resumeCardToken, ulong lobbyToken, ulong otherBossLobbyToken)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, playCardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }

        var validResumeCard = VerifyCardInResume(ctx, resumeCardToken);
        if (validResumeCard is null)
        {
            return;
        }

        var random = new Random();
        var otherBossCardsInResume = ctx.Db.card.LobbyToken.Filter(otherBossLobbyToken)
                                    .Where((card) => card.Location == Locations.Resume)
                                    .OrderBy(_ => random.Next()).ToList();

        if (otherBossCardsInResume is null || otherBossCardsInResume.Count == 0)
        {
            return;
        }

        // Get up to 2 cards
        var selectedCards = otherBossCardsInResume.Take(Math.Min(2, otherBossCardsInResume.Count));

        validResumeCard.LobbyToken = otherBossLobbyToken;

        foreach (var card in selectedCards)
        {
            card.LobbyToken = lobbyToken;
            UpdateCard(ctx, card);
        }
        UpdateCard(ctx, validResumeCard);
        UseAndUpdateCard(ctx, validCard);
    }

    [Reducer]
    public static void Thief(ReducerContext ctx, ulong playCardToken, ulong lobbyToken, ulong otherBossLobbyToken)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, playCardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }

        var random = new Random();
        var otherBossCardsInResume = ctx.Db.card.LobbyToken.Filter(otherBossLobbyToken)
                                    .Where((card) => card.Location == Locations.Resume)
                                    .OrderBy(_ => random.Next()).ToList();

        if (otherBossCardsInResume is null || otherBossCardsInResume.Count == 0)
        {
            return;
        }

        var selectedCard = otherBossCardsInResume.First();
        selectedCard.LobbyToken = lobbyToken;
        selectedCard.Location = Locations.Company;
        UpdateCard(ctx, selectedCard);
        UseAndUpdateCard(ctx, validCard);
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
        UpdateCard(ctx, cardToReactivate);
        UseAndUpdateCard(ctx, validCard);
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
        UseAndUpdateCard(ctx, validCard);
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
        UseAndUpdateCard(ctx, validCard);
    }

    [Reducer]
    public static void Gamer(ReducerContext ctx, ulong cardToken, ulong lobbyToken, ulong guildToken)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, cardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }

        if (!MoveRepresentativeUp(ctx, guildToken))
        {
            return;
        }

        UseAndUpdateCard(ctx, validCard);
    }

    [Reducer]
    public static void Karen(ReducerContext ctx, ulong cardToken, ulong lobbyToken, ulong guildToken)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, cardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }

        if (!MoveRepresentativeDown(ctx, guildToken))
        {
            return;
        }

        UseAndUpdateCard(ctx, validCard);
    }

    [Reducer]
    public static void TaxiDriver(ReducerContext ctx, ulong cardToken, ulong lobbyToken, byte x1, byte x2)
    {
        var isPlayerTurn = ValidateIsTurn(ctx, lobbyToken);
        var validCard = ValidateHasUnusedCard(ctx, cardToken);

        if (validCard is null || !isPlayerTurn)
        {
            // handle not turn or not playable
            return;
        }

        if (!MoveBottomRepresentativeOfX1ToX2(ctx, x1, x2))
        {
            return;
        }
        UseAndUpdateCard(ctx, validCard);
    }
}