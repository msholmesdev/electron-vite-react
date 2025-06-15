import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const GoldDigger = ({ location }: { location: Card_Loc }) => {
  const { getUnusedCardCountByTypeInCompany, goldDiggerReducer } =
    useCardFacade();
  const count = getUnusedCardCountByTypeInCompany(
    Guilds.GoldDigger as Guilds.GoldDigger
  );

  const onFarmerCallback = () => {
    goldDiggerReducer();
  };

  return (
    <Card
      name="gold digger"
      text="Draw 2 cards from unemployed to your resume"
      img={"gold_digger"}
      count={count}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { GoldDigger };
