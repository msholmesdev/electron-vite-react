import { create } from "zustand";

interface CardStore {
  cardDescription: string;
  setCardDescription: (description: string) => void;
}

export const useCardUiStore = create<CardStore>((set) => ({
  cardDescription: "",
  setCardDescription: (description: string) =>
    set({ cardDescription: description }),
}));
