import { create } from "zustand";
import { Game, GameSecret } from "../../module_bindings";

type GameState = {
  games: Game[];
  gamesSecret: GameSecret[];
  addGame: (game: Game) => void;
  addGameSecret: (gameSecret: GameSecret) => void;
  removeGame: (game: Game) => void;
  removeGameSecret: (gameSecret: GameSecret) => void;
  updateGame: (updatedGame: Game) => void;
};

export const useGameStore = create<GameState>((set) => ({
  games: [],
  gamesSecret: [],
  addGame: (game) =>
    set((state) => ({
      games: [...state.games, game],
    })),
  addGameSecret: (gameSecret) =>
    set((state) => ({
      gamesSecret: [...state.gamesSecret, gameSecret],
    })),
  removeGame: (game) =>
    set((state) => ({
      games: state.games.filter((gm) => gm.gameToken !== game.gameToken),
    })),
  removeGameSecret: (gameSecret) =>
    set((state) => ({
      gamesSecret: state.gamesSecret.filter(
        (gmSecret) => gmSecret.gameToken !== gameSecret.gameToken
      ),
    })),
  updateGame: (updatedGame: Game) =>
    set((state) => ({
      games: state.games.map((game) =>
        game.gameToken === updatedGame.gameToken ? updatedGame : game
      ),
    })),
}));
