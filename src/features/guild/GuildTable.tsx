import { GuildColumn } from "./GuildColumn";

const GuildTable = () => {
  return (
    <div className="flex flex-row gap-3 flex-1">
      {Array.from({ length: 10 }, (_, i) => {
        const y = i + 1;
        return <GuildColumn key={y} column={y} />;
      })}
    </div>
  );
};

export { GuildTable };
