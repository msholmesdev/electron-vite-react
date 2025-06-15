import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Thief = ({ location }: { location: Card_Loc }) => {
  const { getUnusedCardCountByTypeInCompany, thiefReducer } = useCardFacade();
  const count = getUnusedCardCountByTypeInCompany(Guilds.Thief as Guilds.Thief);

  const onFarmerCallback = () => {
    thiefReducer(1234567890123456789012345n);
  };

  return (
    <Card
      name="thief"
      text="steal 1 random employee from another boss' resume into your company"
      img={"thief"}
      count={count}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Thief };
