import { useGuildFacade } from "@/spacetimedb/client/facades/useGuildFacade";
import { Guild } from "@/spacetimedb/client/module_bindings";

const GuildColumn = ({ column }: { column: number }) => {
  const { getSortedGuildsInColumn } = useGuildFacade();
  const guilds = getSortedGuildsInColumn(column);

  console.log(`column ${column}: `, guilds);

  return (
    <div className="bg-blue-950 p-1 flex flex-col gap-1">
      {Array.from({ length: 10 }, (_, i) => {
        const y = i + 1;
        const guild = guilds.find((guild) => guild.y === y);
        if (guild) {
          return <GuildItem guild={guild} key={y} />;
        }
        return <div className="h-7 w-7 rounded-xl bg-blue-400" />;
      })}
    </div>
  );
};

const GuildItem = ({ guild }: { guild: Guild }) => {
  return (
    <div className="h-8 w-8">
      <div>{String(guild.representative)}</div>
      <div>
        Y: <span className="pl-1">{guild.y}</span>
      </div>
    </div>
  );
};

export { GuildColumn };
