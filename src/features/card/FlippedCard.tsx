import { CardWidth } from "@/constants/constants";

const FlippedCard = ({ name, count }: { name: string; count: number }) => {
  return (
    <div className="relative">
      <img
        src={"images/card_back.png"}
        alt={name}
        style={{ width: CardWidth }}
      />
      <div className="absolute top-1/2 left-1/2 text-3xl z-10">{count}</div>
    </div>
  );
};

export { FlippedCard };
