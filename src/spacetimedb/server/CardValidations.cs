using SpacetimeDB;

public static partial class Module
{

    public static bool ValidateIsTurn(ReducerContext ctx, ulong lobbyToken)
    {
        var lobby = ctx.Db.lobby.LobbyToken.Find(lobbyToken);
        var lobbySecret = ctx.Db.lobby_secret.LobbyToken.Find(lobbyToken);
        if (lobby is null || lobbySecret is null)
        {
            // handle bad lobby
            return false;
        }

        var game = ctx.Db.game.GameToken.Find(lobby.GameToken);
        if (game is null)
        {
            // handle bad game
            return false;
        }

        if (lobbySecret.Player == ctx.Sender && lobby.turnPosition == game.CurrentTurnPosition)
        {
            return true;
        }

        return false;
    }

    public static Card? ValidateHasUnusedCard(ReducerContext ctx, ulong cardToken)
    {
        var card = ctx.Db.card.CardToken.Find(cardToken);
        if (card is null)
        {
            // handle card does not exist
            return null;
        }

        var cardOwnerVerified = GetVerifiedCardOwnerIdentity(ctx, cardToken);

        if (cardOwnerVerified is null)
        {
            return null;
        }

        if (card.isUsed == false)
        {
            // handle if card has already been used
            return null;
        }

        return card;
    }

    public static Card? CardInAnyCompany(ReducerContext ctx, ulong cardToken)
    {
        var card = ctx.Db.card.CardToken.Find(cardToken);

        if (card is null)
        {
            // handle bad card selection
            return null;
        }

        if (card.Location != Locations.Company)
        {
            // handle card not in company
            return null;
        }

        return card;
    }

    public static Card? VerifyCardInResume(ReducerContext ctx, ulong cardToken)
    {
        var card = ctx.Db.card.CardToken.Find(cardToken);
        if (card is null)
        {
            return null;
        }

        if (card.Location != Locations.Resume)
        {
            return null;
        }

        return card;
    }
}