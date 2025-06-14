import { Card_Loc } from "@/type/types";
import { Farmer } from "./cards/Farmer";
import { Gamer } from "./cards/Gamer";
import { GoldDigger } from "./cards/GoldDigger";
import { Politician } from "./cards/Politician";
import { Pirate } from "./cards/Pirate";
import { Karen } from "./cards/Karen";
import { Intern } from "./cards/Intern";
import { Lawyer } from "./cards/Lawyer";
import { Taxi } from "./cards/Taxi";
import { Thief } from "./cards/Thief";

const CardGrid = ({ location }: { location: Card_Loc }) => {
  return (
    <div className="grid grid-cols-4 gap-5">
      <Farmer location={location} />
      <Gamer location={location} />
      <GoldDigger location={location} />
      <Intern location={location} />
      <Karen location={location} />
      <Lawyer location={location} />
      <Pirate location={location} />
      <Politician location={location} />
      <Taxi location={location} />
      <Thief location={location} />
    </div>
  );
};

export { CardGrid };
