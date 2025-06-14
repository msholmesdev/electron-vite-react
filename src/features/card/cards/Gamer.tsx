import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Gamer = ({ location }: { location: Card_Loc }) => {
  const { getUnusedCardCountByTypeInCompany, gamerReducer } = useCardFacade();
  const count = getUnusedCardCountByTypeInCompany(Guilds.Gamer as Guilds.Gamer);

  const onFarmerCallback = () => {
    gamerReducer(1234567890123456789012345n);
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

export { Gamer };
