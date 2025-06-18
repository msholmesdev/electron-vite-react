import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Taxi = ({ location }: { location: Card_Loc }) => {
  const { getCardCountByTypeInLocation, taxiReducer } = useCardFacade();
  const { usedCardCount, unUsedCardCount } = getCardCountByTypeInLocation(
    Guilds.TaxiDriver as Guilds.TaxiDriver,
    location
  );

  const onFarmerCallback = () => {
    taxiReducer(1, 2);
  };

  return (
    <Card
      name="taxi"
      text="Transfer lowest representative from one guild to another non-empty guild"
      img={"taxi"}
      usedCardCount={usedCardCount}
      unUsedCardCount={unUsedCardCount}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Taxi };
