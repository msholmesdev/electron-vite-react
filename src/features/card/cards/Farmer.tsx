import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Farmer = ({ location }: { location: Card_Loc }) => {
  const { getUnusedCardCountByTypeInCompany, farmerReducer } = useCardFacade();
  const count = getUnusedCardCountByTypeInCompany(
    Guilds.Farmer as Guilds.Farmer
  );

  const onFarmerCallback = () => {
    farmerReducer();
  };

  return (
    <Card
      name="farmer"
      text="Draw one card and immediately hire them"
      img={"farmer"}
      count={count}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Farmer };
