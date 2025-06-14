import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Taxi = ({ location }: { location: Card_Loc }) => {
  const { getUnusedCardCountByTypeInCompany, taxiReducer } = useCardFacade();
  const count = getUnusedCardCountByTypeInCompany(
    Guilds.TaxiDriver as Guilds.TaxiDriver
  );

  const onFarmerCallback = () => {
    taxiReducer(1, 2);
  };

  return (
    <Card
      name="taxi"
      text="Draw one card and immediately hire them"
      img={"taxi"}
      count={count}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Taxi };
