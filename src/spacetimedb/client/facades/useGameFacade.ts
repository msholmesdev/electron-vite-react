import { useGameStore } from "./stores/useGameStore";
import { useConnectionFacade } from "./useConnectionFacade";

export const useGameFacade = () => {
  const games = useGameStore((state) => state.games);
  const addGame = useGameStore((state) => state.addGame);
  const gamesSecret = useGameStore((state) => state.gamesSecret);
  const addGameSecret = useGameStore((state) => state.addGameSecret);
  const { conn } = useConnectionFacade();

  const PLAYER_MIN = 3;
  const PLAYER_MAX = 10;
  const LOBBY_LENGTH_MIN = 4;
  const LOBBY_LENGTH_MAX = 100;

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

  return {
    games,
    addGame,
    gamesSecret,
    addGameSecret,
    hostGame,
    PLAYER_MIN,
    PLAYER_MAX,
    LOBBY_LENGTH_MIN,
    LOBBY_LENGTH_MAX,
  };
};
