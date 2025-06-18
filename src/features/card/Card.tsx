import { useCardUiFacade } from "@/spacetimedb/client/facades/useCardUiFacade";
import { Card_Loc } from "@/type/types";

const Card = ({
  name,
  img,
  text,
  usedCardCount,
  unUsedCardCount,
  companyCallback,
  location,
}: {
  name: string;
  usedCardCount: number;
  unUsedCardCount: number;
  img: string;
  text: string;
  location: Card_Loc;
  companyCallback: () => void;
}) => {
  const { setCardDescription } = useCardUiFacade();

  if (usedCardCount === 0 && unUsedCardCount === 0) {
    return (
      <div className="w-[110px] h-40 border border-amber-500 flex items-center justify-center rounded-xl">
        <div className="max-w-[100px] text-center text-gray-400">{name}</div>
      </div>
    );
  }

  const toggleSelected = () => {};

  const callback = location === "resume" ? toggleSelected : companyCallback;

  return (
    <button
      onMouseEnter={() => {
        setCardDescription(text);
      }}
      onClick={callback}
      className="flex flex-col gap-4 items-center justify-center relative"
    >
      <img
        src={`images/${img}.png`}
        alt={name}
        style={{ minWidth: "110px", width: "110px" }}
      />
      <DisplayCounts used={usedCardCount} unUsed={unUsedCardCount} />
    </button>
  );
};

const DisplayCounts = ({ used, unUsed }: { used: number; unUsed: number }) => {
  return (
    <div className="w-full absolute top-3 left-0">
      <div className="flex gap-5 px-4 w-full justify-between">
        <div className="text-red-400">{used}</div>
        <div className="text-green-400">{unUsed}</div>
      </div>
    </div>
  );
};

export { Card };
