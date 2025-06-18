import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Farmer = ({ location }: { location: Card_Loc }) => {
  const { getCardCountByTypeInLocation, farmerReducer } = useCardFacade();
  const { usedCardCount, unUsedCardCount } = getCardCountByTypeInLocation(
    Guilds.Farmer as Guilds.Farmer,
    location
  );

  const onFarmerCallback = () => {
    farmerReducer();
  };

  return (
    <Card
      name="farmer"
      text="Draw one card and immediately hire them"
      img={"farmer"}
      usedCardCount={usedCardCount}
      unUsedCardCount={unUsedCardCount}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Farmer };
