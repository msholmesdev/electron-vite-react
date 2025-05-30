import { create } from "zustand";
import { Game } from "../../module_bindings";

type GameState = {
  games: Game[];
  addGame: (game: Game) => void;
};

export const useGameStore = create<GameState>((set) => ({
  games: [],
  addGame: (game) =>
    set((state) => ({
      games: [...state.games, game],
    })),
}));
