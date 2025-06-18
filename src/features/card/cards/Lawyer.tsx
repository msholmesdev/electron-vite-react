import { useCardFacade } from "@/spacetimedb/client/facades/useCardFacade";
import { Card } from "../Card";
import { Guilds } from "@/spacetimedb/client/module_bindings";
import { Card_Loc } from "@/type/types";

const Lawyer = ({ location }: { location: Card_Loc }) => {
  const { getCardCountByTypeInLocation, lawyerReducer } = useCardFacade();
  const { usedCardCount, unUsedCardCount } = getCardCountByTypeInLocation(
    Guilds.Lawyer as Guilds.Lawyer,
    location
  );

  const onFarmerCallback = () => {
    lawyerReducer(1234567890123456789012345n, 1234567890123456789012345n);
  };

  return (
    <Card
      name="lawyer"
      text="Employ 2 employees from your resume"
      img={"lawyer"}
      usedCardCount={usedCardCount}
      unUsedCardCount={unUsedCardCount}
      location={location}
      companyCallback={onFarmerCallback}
    />
  );
};

export { Lawyer };
