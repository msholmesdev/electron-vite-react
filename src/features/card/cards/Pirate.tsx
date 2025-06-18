import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Pirate = ({ location }: { location: Card_Loc }) => {
  const { getCardCountByTypeInLocation, pirateReducer } = useCardFacade();
  const { usedCardCount, unUsedCardCount } = getCardCountByTypeInLocation(
    Guilds.Pirate as Guilds.Pirate,
    location
  );

  const onFarmerCallback = () => {
    pirateReducer(1234567890123456789012345n);
  };

  return (
    <Card
      name="pirate"
      text="steal 1 employee from another company into your resume"
      img={"pirate"}
      usedCardCount={usedCardCount}
      unUsedCardCount={unUsedCardCount}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Pirate };
