using SpacetimeDB;
public static partial class Module
{

    [Table(Name = "boss", Public = true)]
    public partial class Boss
    {
        [PrimaryKey]
        public Identity Identity;
        public Guilds? Representative;
        [Unique, AutoInc]
        public byte turnPosition;
    }

    /*
    [Reducer]
    public static void CreateBoss(ReducerContext ctx, Identity player, Guilds name)
    {
        ctx.Db.boss.Representative = name;
    }


    [Reducer]
    public static void ChooseRepresentative(ReducerContext ctx, Guilds name)
    {
        ctx.Db.boss.Representative = name;
    }
    */

}
   
