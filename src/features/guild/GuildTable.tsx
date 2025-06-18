import { GuildColumn } from "./GuildColumn";

const GuildTable = () => {
  return (
    <div className="bg-blue-950 rounded-xl px-3 py-2 flex flex-row justify-between flex-1">
      {Array.from({ length: 10 }, (_, i) => {
        const y = i + 1;
        return <GuildColumn key={y} column={y} />;
      })}
    </div>
  );
};

export { GuildTable };
