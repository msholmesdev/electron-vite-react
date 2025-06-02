import { useGameStore } from "./stores/useGameStore";

export const useGamesFacade = () => {
  const games = useGameStore((state) => state.games);
  const addGame = useGameStore((state) => state.addGame);
  const gamesSecret = useGameStore((state) => state.gamesSecret);
  const addGameSecret = useGameStore((state) => state.addGameSecret);

  return {
    games,
    addGame,
    gamesSecret,
    addGameSecret,
  };
};
