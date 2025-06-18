import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Thief = ({ location }: { location: Card_Loc }) => {
  const { getCardCountByTypeInLocation, thiefReducer } = useCardFacade();
  const { usedCardCount, unUsedCardCount } = getCardCountByTypeInLocation(
    Guilds.Thief as Guilds.Thief,
    location
  );

  const onFarmerCallback = () => {
    thiefReducer(1234567890123456789012345n);
  };

  return (
    <Card
      name="thief"
      text="steal 1 random employee from another boss' resume into your company"
      img={"thief"}
      usedCardCount={usedCardCount}
      unUsedCardCount={unUsedCardCount}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Thief };
