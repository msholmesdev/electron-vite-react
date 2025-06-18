import { useGuildFacade } from "@/spacetimedb/client/facades/useGuildFacade";
import { Guild } from "@/spacetimedb/client/module_bindings";

const GuildColumn = ({ column }: { column: number }) => {
  const { getSortedGuildsInColumn } = useGuildFacade();
  const guilds = getSortedGuildsInColumn(column);
  console.log("guilds in column", column, guilds);

  return (
    <div className="p-1 flex flex-col gap-1">
      {Array.from({ length: 10 }, (_, i) => {
        const y = 10 - i;
        const guild = guilds.find((guild) => guild.y === y);
        if (guild) {
          console.log(guild);
          return <GuildItem guild={guild} key={y} />;
        }
        return (
          <div
            key={y}
            className="h-7 w-7 rounded-xl bg-blue-400 text-red-400"
          />
        );
      })}
    </div>
  );
};

const GuildItem = ({ guild }: { guild: Guild }) => {
  return (
    <div className="h-8 w-8 text-lawyer">
      <div>{String(guild.representative.tag)}</div>
    </div>
  );
};

export { GuildColumn };
