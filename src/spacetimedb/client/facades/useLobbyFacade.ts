import { useLobbyStore } from "./stores/useLobbyStore";
import { useConnectionFacade } from "./useConnectionFacade";

export function useLobbyFacade() {
  const lobbies = useLobbyStore((state) => state.lobbies);
  const addLobby = useLobbyStore((state) => state.addLobby);
  const removeLobby = useLobbyStore((state) => state.removeLobby);
  const { conn } = useConnectionFacade();

  const leaveLobbyReducer = (gameToken: bigint) => {
    if (!conn) {
      console.warn("Connection not available.");
      return;
    }
    conn.reducers.removeSelfFromLobby(gameToken);
  };

  const joinLobbyReducer = (gameToken: bigint) => {
    if (!conn) {
      console.warn("Connection not available.");
      return;
    }
    conn.reducers.joinLobby(gameToken);
  };

  return {
    lobbies,
    addLobby,
    removeLobby,
    leaveLobbyReducer,
    joinLobbyReducer,
  };
}
