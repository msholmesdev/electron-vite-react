import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { useGameFacade } from "@/spacetimedb/client/facades/useGameFacade";
import { useEffect } from "react";
import { ChooseTurnOption } from "./ChooseTurnType";

const Game = () => {
  const { cards } = useCardFacade();
  const { connectedGame } = useGameFacade();
  useEffect(() => {
    if (cards.length > 0) {
      console.log("cards", cards);
    }
  }, [cards]);
  return (
    <div>
      <div>GAME HERE</div>
      <ChooseTurnOption />
    </div>
  );
};

export { Game };
