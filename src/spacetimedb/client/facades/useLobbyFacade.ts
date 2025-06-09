import { useMemo } from "react";
import { Lobby } from "../module_bindings";
import { useLobbyStore } from "./stores/useLobbyStore";
import { useConnectionFacade } from "./useConnectionFacade";

export function useLobbyFacade() {
  const lobbies = useLobbyStore((state) => state.lobbies);
  const lobbiesSecret = useLobbyStore((state) => state.lobbiesSecret);
  const addLobby = useLobbyStore((state) => state.addLobby);
  const removeLobby = useLobbyStore((state) => state.removeLobby);
  const addLobbySecret = useLobbyStore((state) => state.addLobbySecret);
  const removeLobbySecret = useLobbyStore((state) => state.removeLobbySecret);
  const { conn } = useConnectionFacade();
  const connectedLobby = useMemo(() => {
    console.log("conneted lobby getting updated");
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
      console.log("no connected lobby");
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

  const closeLobbyReducer = (gameToken: bigint) => {
    if (!conn) {
      console.warn("Connection not available.");
      return;
    }
    conn.reducers.closeLobby(gameToken);
  };

  return {
    lobbies,
    lobbiesSecret,
    addLobby,
    removeLobby,
    leaveLobbyReducer,
    joinLobbyReducer,
    closeLobbyReducer,
    addLobbySecret,
    removeLobbySecret,
    connectedLobby,
  };
}
