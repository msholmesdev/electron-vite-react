import { useEffect } from "react";
import { EventContext, Guild } from "../module_bindings";
import { useConnectionFacade } from "../facades/useConnectionFacade";
import { useGuildFacade } from "../facades/useGuildFacade";

function useGuild() {
  const { conn } = useConnectionFacade();
  const { addGuild, updateGuild } = useGuildFacade();

  useEffect(() => {
    if (!conn) return;

    const onInsert = (_ctx: EventContext, guild: Guild) => {
      console.log("Insert Guild:", guild);
      addGuild(guild);
    };

    const onUpdate = (_ctx: EventContext, _old: Guild, updated: Guild) => {
      console.log("Update Guild:", updated);
      updateGuild(updated);
    };

    conn.db.guild.onInsert(onInsert);
    conn.db.guild.onUpdate(onUpdate);

    return () => {
      conn.db.guild.removeOnInsert(onInsert);
      conn.db.guild.removeOnUpdate(onUpdate);
    };
  }, [conn]);
}

export { useGuild };
