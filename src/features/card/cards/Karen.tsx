import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Karen = ({ location }: { location: Card_Loc }) => {
  const { getCardCountByTypeInLocation, karenReducer } = useCardFacade();
  const { usedCardCount, unUsedCardCount } = getCardCountByTypeInLocation(
    Guilds.Karen as Guilds.Karen,
    location
  );

  const onFarmerCallback = () => {
    karenReducer(1234567890123456789012345n);
  };

  return (
    <Card
      name="karen"
      text="move a representative up 1 position"
      img={"karen"}
      usedCardCount={usedCardCount}
      unUsedCardCount={unUsedCardCount}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Karen };
