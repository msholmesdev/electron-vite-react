import { useCardUiFacade } from "@/spacetimedb/client/facades/useCardUiFacade";
import { Card_Loc } from "@/type/types";

const Card = ({
  name,
  img,
  text,
  count,
  companyCallback,
  location,
}: {
  name: string;
  count: number;
  img: string;
  text: string;
  location: Card_Loc;
  companyCallback: () => void;
}) => {
  //const [isUnusedCardSelected];
  const { setCardDescription } = useCardUiFacade();

  if (count !== 0) {
    return <div className="w-20 h-40 bg-red-300"></div>;
  }

  const toggleSelected = () => {};

  const callback = location === "resume" ? toggleSelected : companyCallback;

  return (
    <button
      onMouseEnter={() => {
        setCardDescription(text);
      }}
      onClick={callback}
      className="flex flex-col gap-4 items-center justify-center"
    >
      <img src={`images/${img}.png`} alt={name} className="hover:w-24" />
      {false && <div>{text}</div>}
    </button>
  );
};

export { Card };
