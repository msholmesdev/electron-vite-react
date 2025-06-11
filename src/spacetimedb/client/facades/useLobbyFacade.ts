import { useMemo } from "react";
import { Lobby, Turn } from "../module_bindings";
import { useLobbyStore } from "./stores/useLobbyStore";
import { useConnectionFacade } from "./useConnectionFacade";

export function useLobbyFacade() {
  const lobbies = useLobbyStore((state) => state.lobbies);
  const lobbiesSecret = useLobbyStore((state) => state.lobbiesSecret);
  const addLobby = useLobbyStore((state) => state.addLobby);
  const removeLobby = useLobbyStore((state) => state.removeLobby);
  const addLobbySecret = useLobbyStore((state) => state.addLobbySecret);
  const removeLobbySecret = useLobbyStore((state) => state.removeLobbySecret);
  const updateLobby = useLobbyStore((state) => state.updateLobby);
  const { conn } = useConnectionFacade();
  const connectedLobby = useMemo(() => {
    let playerLobbies: Lobby[] = [];

    lobbiesSecret.forEach((lobSecret) => {
      const lobbiesWithSecret = lobbies.filter(
        (lob) => lob.lobbyToken === lobSecret.lobbyToken
      );
      playerLobbies = playerLobbies.concat(lobbiesWithSecret);
    });

    if (playerLobbies.length > lobbiesSecret.length) {
      console.log("ERROR mismatch between secret and regular lobbies");
    }

    const activeLobs = playerLobbies.filter((lob) => lob.isConnected === true);
    if (activeLobs.length > 1) {
      console.log(
        "ERROR: there should never be more than 1 active lobby for a player"
      );
    }

    if (activeLobs.length === 0) {
      return null;
    }

    return activeLobs[0];
  }, [lobbies, lobbiesSecret]);

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

  const readyUp = () => {
    if (!conn) {
      console.warn("Connection not available.");
      return;
    }

    if (!connectedLobby) {
      console.warn("Not in a lobby.");
      return;
    }

    console.log("reading up with ", connectedLobby);
    conn.reducers.readyUpInLobby(connectedLobby.lobbyToken);
  };

  const closeLobbyReducer = (gameToken: bigint) => {
    if (!conn) {
      console.warn("Connection not available.");
      return;
    }
    conn.reducers.closeLobby(gameToken);
  };

  const setTurnTypeReducer = (turnType: Turn) => {
    if (!conn) {
      console.warn("Connection not available.");
      return;
    }
    if (!connectedLobby) {
      console.warn("No connected lobby.");
      return;
    }

    conn.reducers.selectTurnType(connectedLobby.lobbyToken, turnType);
  };

  return {
    lobbies,
    lobbiesSecret,
    addLobby,
    removeLobby,
    leaveLobbyReducer,
    joinLobbyReducer,
    readyUp,
    closeLobbyReducer,
    addLobbySecret,
    removeLobbySecret,
    updateLobby,
    setTurnTypeReducer,
    connectedLobby,
  };
}
