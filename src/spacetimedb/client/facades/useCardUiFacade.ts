import { useCardUiStore } from "./stores/useCardUiStore";

export const useCardUiFacade = () => {
  const cardDescription = useCardUiStore((state) => state.cardDescription);
  const setCardDescription = useCardUiStore(
    (state) => state.setCardDescription
  );

  return {
    cardDescription,
    setCardDescription,
  };
};
