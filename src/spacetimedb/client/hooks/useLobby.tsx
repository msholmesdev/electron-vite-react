import { useEffect } from "react";
import { EventContext, Lobby, LobbySecret } from "../module_bindings";
import { useConnectionFacade } from "../facades/useConnectionFacade";
import { useLobbyFacade } from "../facades/useLobbyFacade";

function useLobby() {
  const { conn } = useConnectionFacade();
  const {
    addLobby,
    removeLobby,
    addLobbySecret,
    removeLobbySecret,
    updateLobby,
  } = useLobbyFacade();

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

    const onInsertLobbySecret = (
      _ctx: EventContext,
      lobbySecret: LobbySecret
    ) => {
      console.log("adding a new lobby secret: ", lobbySecret);
      addLobbySecret(lobbySecret);
    };
    conn.db.lobbySecret.onInsert(onInsertLobbySecret);

    const onDeleteLobbySecret = (
      _ctx: EventContext,
      lobbySecret: LobbySecret
    ) => {
      console.log("removing lobby secret:", lobbySecret);
      removeLobbySecret(lobbySecret);
    };
    conn.db.lobbySecret.onDelete(onDeleteLobbySecret);

    const onUpdateLobby = (
      _ctx: EventContext,
      _oldLobby: Lobby,
      newLobby: Lobby
    ) => {
      console.log("updated lobby: ", newLobby);
      updateLobby(newLobby);
    };
    conn.db.lobby.onUpdate(onUpdateLobby);

    return () => {
      conn.db.lobby.removeOnInsert(onInsertLobby);
      conn.db.lobby.removeOnDelete(onDeleteLobby);
      conn.db.lobbySecret.removeOnInsert(onInsertLobbySecret);
      conn.db.lobbySecret.removeOnDelete(onDeleteLobbySecret);
      conn.db.lobby.removeOnUpdate(onUpdateLobby);
    };
  }, [conn]);
}

export { useLobby };
