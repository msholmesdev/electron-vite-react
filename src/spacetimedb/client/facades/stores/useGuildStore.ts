import { create } from "zustand";
import { Guild } from "../../module_bindings";

interface GuildStore {
  guilds: Guild[];
  setGuilds: (guilds: Guild[]) => void;
  updateGuild: (guild: Guild) => void;
}

export const useGuildStore = create<GuildStore>((set) => ({
  guilds: [],
  setGuilds: (guilds: Guild[]) => set({ guilds: guilds }),
  updateGuild: (updatedGuild: Guild) =>
    set((state) => ({
      guilds: state.guilds.map((guild) =>
        guild.guildToken === updatedGuild.guildToken ? updatedGuild : guild
      ),
    })),
}));
