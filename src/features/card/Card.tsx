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
  if (count === 0) {
    return <div className="w-50 h-40 bg-red-300"></div>;
  }

  const toggleSelected = () => {};

  const callback = location === "resume" ? toggleSelected : companyCallback;

  return (
    <button onClick={callback} className="flex flex-col gap-4">
      <img src={"images/farmer.png"} alt={name} style={{ width: "200px" }} />
      <div>{text}</div>
    </button>
  );
};

export { Card };
