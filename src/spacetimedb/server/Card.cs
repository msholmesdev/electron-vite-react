using SpacetimeDB;

//#pragma warning disable STDB_UNSTABLE
public static partial class Module
{

    /*
    [ClientVisibilityFilter]
    public static readonly Filter CARD_FILTER = new Filter.Sql(
    "SELECT * FROM card WHERE Location ! Unemployed"

    
);
*/

    /*
        [ClientVisibilityFilter]
        public static readonly Filter CARDS_IN_GAME = new Filter.Sql(
            "SELECT card.* FROM card JOIN lobby_secret WHERE lobby_secret.Player = :sender"
        );
        */

    [Table(Name = "card", Public = true)]
    public partial class Card
    {
        [PrimaryKey, AutoInc]
        public ulong CardToken;
        [SpacetimeDB.Index.BTree]
        public ulong? LobbyToken;
        [SpacetimeDB.Index.BTree]
        public ulong GameToken;
        public Guilds Employee;
        public Locations Location;
        public bool isUsed;
    }

    public static void InitializeCards(ReducerContext ctx, ulong gameToken)
    {
        byte numberOfEachCard = 10;
        foreach (var guild in Enum.GetValues<Guilds>())
        {
            for (int i = 0; i < numberOfEachCard; i++)
            {
                ctx.Db.card.Insert(
                   new Card
                   {
                       GameToken = gameToken,
                       Employee = guild,
                       Location = Locations.Unemployed,
                       isUsed = true,
                   }
               );
            }
        }
    }

    public static void UseAndUpdateCard(ReducerContext ctx, Card card)
    {
        card.isUsed = true;
        ctx.Db.card.CardToken.Update(card);
    }
}