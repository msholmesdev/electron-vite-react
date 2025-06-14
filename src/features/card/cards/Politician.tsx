import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Politician = ({ location }: { location: Card_Loc }) => {
  const { getUnusedCardCountByTypeInCompany, politicianReducer } =
    useCardFacade();
  const count = getUnusedCardCountByTypeInCompany(
    Guilds.Politician as Guilds.Politician
  );

  const onFarmerCallback = () => {
    politicianReducer(1234567890123456789012345n, 1234567890123456789012345n);
  };

  return (
    <Card
      name="politician"
      text="Draw one card and immediately hire them"
      img={"politician"}
      count={count}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Politician };
