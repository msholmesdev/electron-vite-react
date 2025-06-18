import { useGuildStore } from "./stores/useGuildStore";

const useGuildFacade = () => {
  const guilds = useGuildStore((state) => state.guilds);
  const addGuild = useGuildStore((state) => state.addGuild);
  const updateGuild = useGuildStore((state) => state.updateGuild);

  const COLUMNS = 10;
  const ROWS = 10;

  const getSortedGuildsInColumn = (y: number) => {
    return guilds.filter((guild) => guild.x === y).sort((a, b) => a.y - b.y);
  };

  const isValidColumn = (y: number) => {
    return getSortedGuildsInColumn(y).length > 0;
  };

  return {
    guilds,
    addGuild,
    updateGuild,
    getSortedGuildsInColumn,
    isValidColumn,
    COLUMNS,
    ROWS,
  };
};

export { useGuildFacade };
