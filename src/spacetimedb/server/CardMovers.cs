using SpacetimeDB;

public static partial class Module
{

    public static void AddCardsFromUnemployedToResume(ReducerContext ctx, ulong lobbyToken, int numberToMove)
    {
        AddCardsFromUnemployedToLocation(ctx, lobbyToken, numberToMove, Locations.Resume);
    }

    public static void AddCardsFromUnemployedToCompany(ReducerContext ctx, ulong lobbyToken, int numberToMove)
    {
        AddCardsFromUnemployedToLocation(ctx, lobbyToken, numberToMove, Locations.Company);
    }

    public static void AddCardsFromUnemployedToLocation(ReducerContext ctx, ulong lobbyToken, int numberToMove, Locations location)
    {
        var lobby = ctx.Db.lobby.LobbyToken.Find(lobbyToken);
        if (lobby is null)
        {
            // handle bad lobby
            return;
        }

        var cards = ctx.Db.card.GameToken.Filter(lobby.GameToken)
            .Where(card => card.Location == Locations.Unemployed);

        var cardsList = cards?.ToList();
        if (cardsList == null || cardsList.Count == 0)
            return;

        var random = new Random();
        int moveCount = Math.Min(numberToMove, cardsList.Count);

        for (int i = 0; i < moveCount; i++)
        {
            int randomIndex = random.Next(cardsList.Count);
            var randomCard = cardsList[randomIndex];

            var card = ctx.Db.card.CardToken.Find(randomCard.CardToken);
            if (card != null)
            {
                card.LobbyToken = lobbyToken;
                card.Location = location;
            }

            cardsList.RemoveAt(randomIndex);
        }
    }

    public static void AddCardFromResumeToCompany(ReducerContext ctx, ulong cardToken)
    {
        var card = ctx.Db.card.CardToken.Find(cardToken);
        if (card is not null)
        {
            card.Location = Locations.Company;
        }
    }

    public static void TradeFromYourCompanyForTwoFromAnotherCompany(
        ReducerContext ctx, ulong yourCardToken, ulong otherCardToken1, ulong otherCardToken2)
    {
        var cardOwnerVerified = GetVerifiedCardOwnerIdentity(ctx, yourCardToken);
        if (cardOwnerVerified is null)
        {
            // handle bad owner / bad "yourCardToken"
            return;
        }

        var yourCard = ctx.Db.card.CardToken.Find(yourCardToken);
        if (yourCard is null)
        {
            // handle card does not exist
            return;
        }

        if (yourCard.Location != Locations.Company)
        {
            // handle card in wrong location
            return;
        }

        var card1Valid = CardInAnyCompany(ctx, otherCardToken1);
        var card2Valid = CardInAnyCompany(ctx, otherCardToken2);

        if (card1Valid is null || card2Valid is null)
        {
            // handle bad card selection
            return;
        }

        var yourLobbyToken = yourCard.LobbyToken;
        var anotherLobbyToken = card1Valid.LobbyToken;

        if (yourLobbyToken is null || anotherLobbyToken is null)
        {
            return;
        }

        yourCard.LobbyToken = anotherLobbyToken;
        card1Valid.LobbyToken = yourLobbyToken;
        card2Valid.LobbyToken = yourLobbyToken;
    }
}