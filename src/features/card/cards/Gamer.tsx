import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Gamer = ({ location }: { location: Card_Loc }) => {
  const { getCardCountByTypeInLocation, gamerReducer } = useCardFacade();
  const { usedCardCount, unUsedCardCount } = getCardCountByTypeInLocation(
    Guilds.Gamer as Guilds.Gamer,
    location
  );

  const onFarmerCallback = () => {
    gamerReducer(1234567890123456789012345n);
  };

  return (
    <Card
      name="gamer"
      text="move a representative up 1 position"
      img={"gamer"}
      usedCardCount={usedCardCount}
      unUsedCardCount={unUsedCardCount}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Gamer };
