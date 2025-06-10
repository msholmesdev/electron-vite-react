import { create } from "zustand";
import { Card } from "../../module_bindings";

interface CardStore {
  cards: Card[];
  addCard: (card: Card) => void;
  removeCard: (card: Card) => void;
  updateCard: (updatedCard: Card) => void;
  clearCards: () => void;
}

export const useCardStore = create<CardStore>((set) => ({
  cards: [],

  addCard: (card) =>
    set((state) => ({
      cards: [
        ...state.cards.filter((c) => c.cardToken !== card.cardToken),
        card,
      ],
    })),

  removeCard: (card) =>
    set((state) => ({
      cards: state.cards.filter((c) => c.cardToken !== card.cardToken),
    })),

  updateCard: (updatedCard) =>
    set((state) => ({
      cards: state.cards.map((card) =>
        card.cardToken === updatedCard.cardToken ? updatedCard : card
      ),
    })),

  clearCards: () => set({ cards: [] }),
}));
