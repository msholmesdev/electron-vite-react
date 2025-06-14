import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { useEffect } from "react";
import { ChooseTurnOption } from "./ChooseTurnType";
import { Deck } from "../card/Deck";
import { Hand } from "../card/Hand";

const Game = () => {
  const { cards } = useCardFacade();
  useEffect(() => {
    if (cards.length > 0) {
      console.log("cards", cards);
    }
  }, [cards]);

  return (
    <div>
      <Deck />
      <Hand />
      <ChooseTurnOption />
    </div>
  );
};

export { Game };
