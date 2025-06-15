import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { useEffect } from "react";
import { ChooseTurnOption } from "./ChooseTurnType";
import { Deck } from "../card/Deck";
import { Hand } from "../card/Hand";
import { Container } from "@/components/Container";
import { CardDescription } from "../card/CardDescription";
import { GuildTable } from "../guild/GuildTable";

const Game = () => {
  const { cards } = useCardFacade();
  useEffect(() => {
    if (cards.length > 0) {
      console.log("cards", cards);
    }
  }, [cards]);

  return (
    <Container className="p-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row gap-6">
          <GuildTable />
          <div className=" bg-amber-200 w-2 h-[285px]"></div>
          <Hand />
        </div>
        <div className="flex flex-row gap-6">
          <Hand />
          <div className=" bg-amber-200 w-2 h-[285px]"></div>
          <Deck />
        </div>
        <div className="flex items-center w-full justify-center">
          <CardDescription />
        </div>
        <ChooseTurnOption />
      </div>
    </Container>
  );
};

export { Game };
