import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const GoldDigger = ({ location }: { location: Card_Loc }) => {
  const { getCardCountByTypeInLocation, goldDiggerReducer } = useCardFacade();
  const { usedCardCount, unUsedCardCount } = getCardCountByTypeInLocation(
    Guilds.GoldDigger as Guilds.GoldDigger,
    location
  );

  const onFarmerCallback = () => {
    goldDiggerReducer();
  };

  return (
    <Card
      name="gold digger"
      text="Draw 2 cards from unemployed to your resume"
      img={"gold_digger"}
      usedCardCount={usedCardCount}
      unUsedCardCount={unUsedCardCount}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { GoldDigger };
