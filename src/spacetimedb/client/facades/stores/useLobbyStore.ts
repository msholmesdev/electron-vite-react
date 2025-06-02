import { create } from "zustand";
import { Lobby } from "../../module_bindings";

type LobbyState = {
  lobbies: Lobby[];
  addLobby: (lobby: Lobby) => void;
  removeLobby: (lobby: Lobby) => void;
};

export const useLobbyStore = create<LobbyState>((set) => ({
  lobbies: [],
  addLobby: (lobby) =>
    set((state) => ({
      lobbies: [...state.lobbies, lobby],
    })),
  removeLobby: (lobby) =>
    set((state) => ({
      lobbies: state.lobbies.filter(
        (lob) => lob.lobbyToken !== lobby.lobbyToken
      ),
    })),
}));
