using SpacetimeDB;
public static partial class Module
{

    [Table(Name = "card", Public = true)]
    public partial class Card
    {
        [PrimaryKey]
        public Identity Identity;
        public Guilds? Employee;
        public Identity? Boss;
        public Locations? Location;
        public bool isUsed;
    }
}