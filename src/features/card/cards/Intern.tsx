import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Intern = ({ location }: { location: Card_Loc }) => {
  const { getCardCountByTypeInLocation, internReducer } = useCardFacade();
  const { usedCardCount, unUsedCardCount } = getCardCountByTypeInLocation(
    Guilds.Intern as Guilds.Intern,
    location
  );

  const onFarmerCallback = () => {
    internReducer(1234567890123456789012345n);
  };

  return (
    <Card
      name="intern"
      text="work an employee in your company that already worked"
      img={"intern"}
      usedCardCount={usedCardCount}
      unUsedCardCount={unUsedCardCount}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Intern };
