import { useCardUiFacade } from "@/spacetimedb/client/facades/useCardUiFacade";

const CardDescription = () => {
  const { cardDescription } = useCardUiFacade();
  return (
    <div className="border-amber-300 border w-96 h-14">{cardDescription}</div>
  );
};

export { CardDescription };
