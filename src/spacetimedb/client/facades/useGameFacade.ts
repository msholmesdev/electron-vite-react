import { useMemo } from "react";
import { useGameStore } from "./stores/useGameStore";
import { useConnectionFacade } from "./useConnectionFacade";
import { useLobbyFacade } from "./useLobbyFacade";

export const useGameFacade = () => {
  const games = useGameStore((state) => state.games);
  const addGame = useGameStore((state) => state.addGame);
  const gamesSecret = useGameStore((state) => state.gamesSecret);
  const addGameSecret = useGameStore((state) => state.addGameSecret);
  const removeGame = useGameStore((state) => state.removeGame);
  const removeGameSecret = useGameStore((state) => state.removeGameSecret);
  const updateGame = useGameStore((state) => state.updateGame);
  const { conn } = useConnectionFacade();
  const { connectedLobby } = useLobbyFacade();

  const PLAYER_MIN = 3;
  const PLAYER_MAX = 10;
  const LOBBY_LENGTH_MIN = 4;
  const LOBBY_LENGTH_MAX = 100;

  const isHost = useMemo(() => {
    if (!connectedLobby) return false;

    const game = gamesSecret.find(
      (gameSecret) => gameSecret.gameToken === connectedLobby.gameToken
    );

    return !!game?.gameToken;
  }, [connectedLobby, gamesSecret]);

  const connectedGame = useMemo(() => {
    if (!connectedLobby) return undefined;

    const game = games.find(
      (game) => game.gameToken === connectedLobby.gameToken
    );

    return game;
  }, [connectedLobby, games]);

  const isTurn = useMemo(() => {
    if (!connectedLobby) return false;
    if (!connectedGame) return false;

    return connectedLobby.turnPosition === connectedGame.currentTurnPosition;
  }, [connectedGame, connectedLobby]);

  const hostGame = (
    lobbyName: string,
    playerCount: number,
    isPrivate: boolean = false
  ) => {
    if (!conn) {
      console.warn("no connection");
      return;
    }
    if (
      lobbyName.length < LOBBY_LENGTH_MIN ||
      lobbyName.length > LOBBY_LENGTH_MAX
    ) {
      console.log("lobby name to short");
      return;
    }
    if (playerCount < PLAYER_MIN || playerCount > PLAYER_MAX) {
      console.log("player count out of bounds");
      return;
    }
    conn.reducers.startLobby(lobbyName, playerCount, isPrivate);
  };

  const startGame = () => {
    if (!conn) {
      console.warn("no connection");
      return;
    }

    if (!connectedGame) {
      console.warn("no game");
      return;
    }

    conn.reducers.startGame(connectedGame.gameToken);
  };

  return {
    games,
    addGame,
    gamesSecret,
    addGameSecret,
    hostGame,
    removeGame,
    updateGame,
    removeGameSecret,
    startGame,
    isTurn,
    connectedGame,
    isHost,
    PLAYER_MIN,
    PLAYER_MAX,
    LOBBY_LENGTH_MIN,
    LOBBY_LENGTH_MAX,
  };
};
