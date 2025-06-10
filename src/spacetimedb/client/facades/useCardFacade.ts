import { useCardStore } from "./stores/useCardStore";

export const useCardFacade = () => {
  const cards = useCardStore((state) => state.cards);
  const addCard = useCardStore((state) => state.addCard);
  const removeCard = useCardStore((state) => state.removeCard);
  const updateCard = useCardStore((state) => state.updateCard);
  const clearCards = useCardStore((state) => state.clearCards);

  return {
    cards,
    addCard,
    removeCard,
    updateCard,
    clearCards,
  };
};
