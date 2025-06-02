import { useEffect } from "react";
import { EventContext, Lobby } from "../module_bindings";
import { useConnectionFacade } from "../facades/useConnectionFacade";
import { useLobbyFacade } from "../facades/useLobbyFacade";

function useLobby() {
  const { conn } = useConnectionFacade();
  const { addLobby, removeLobby } = useLobbyFacade();

  useEffect(() => {
    if (!conn) return;
    const onInsertLobby = (_ctx: EventContext, lobby: Lobby) => {
      console.log("adding a new lobby:", lobby);
      addLobby(lobby);
    };
    conn.db.lobby.onInsert(onInsertLobby);

    const onDeleteLobby = (_ctx: EventContext, lobby: Lobby) => {
      console.log("removing lobby:", lobby);
      removeLobby(lobby);
    };
    conn.db.lobby.onDelete(onDeleteLobby);

    return () => {
      conn.db.lobby.removeOnInsert(onInsertLobby);
      conn.db.lobby.removeOnDelete(onDeleteLobby);
    };
  }, [conn]);
}

export { useLobby };
