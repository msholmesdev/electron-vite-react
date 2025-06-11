import { create } from "zustand";
import { Lobby, LobbySecret } from "../../module_bindings";

type LobbyState = {
  lobbies: Lobby[];
  lobbiesSecret: LobbySecret[];
  addLobby: (lobby: Lobby) => void;
  addLobbySecret: (lobbySecret: LobbySecret) => void;
  removeLobbySecret: (lobbySecret: LobbySecret) => void;
  removeLobby: (lobby: Lobby) => void;
  updateLobby: (updatedLobby: Lobby) => void;
};

export const useLobbyStore = create<LobbyState>((set) => ({
  lobbies: [],
  lobbiesSecret: [],
  addLobby: (lobby) => {
    console.log("adding lobby");
    return set((state) => ({
      lobbies: [...state.lobbies, lobby],
    }));
  },
  removeLobby: (lobby) =>
    set((state) => ({
      lobbies: state.lobbies.filter(
        (lob) => lob.lobbyToken !== lobby.lobbyToken
      ),
    })),
  addLobbySecret: (lobbySecret) =>
    set((state) => ({
      lobbiesSecret: [...state.lobbiesSecret, lobbySecret],
    })),
  removeLobbySecret: (lobbySecret) =>
    set((state) => ({
      lobbiesSecret: state.lobbiesSecret.filter(
        (lob) => lob.lobbyToken !== lobbySecret.lobbyToken
      ),
    })),
  updateLobby: (updatedLobby) =>
    set((state) => ({
      lobbies: state.lobbies.map((lobby) =>
        lobby.lobbyToken === updatedLobby.lobbyToken ? updatedLobby : lobby
      ),
    })),
}));
