import { create } from "zustand";
import { Guild } from "../../module_bindings";

interface GuildStore {
  guilds: Guild[];
  addGuild: (guilds: Guild) => void;
  updateGuild: (guild: Guild) => void;
}

export const useGuildStore = create<GuildStore>((set) => ({
  guilds: [],
  addGuild: (guild) =>
    set((state) => ({
      guilds: [...state.guilds, guild],
    })),
  updateGuild: (updatedGuild: Guild) =>
    set((state) => ({
      guilds: state.guilds.map((guild) =>
        guild.guildToken === updatedGuild.guildToken ? updatedGuild : guild
      ),
    })),
}));
