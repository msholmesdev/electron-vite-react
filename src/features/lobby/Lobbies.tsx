import { MenuCard } from "./Menu";
import { Game } from "@/spacetimedb/client/module_bindings";
import { useGameFacade } from "@/spacetimedb/client/facades/useGameFacade";
import { useLobbyFacade } from "@/spacetimedb/client/facades/useLobbyFacade";

function Lobbies() {
  const { games } = useGameFacade();
  const { joinLobbyReducer } = useLobbyFacade();

  const join = (token: bigint) => {
    console.log("joining lobby: ", token);
    joinLobbyReducer(token);
  };

  return (
    <MenuCard>
      <LobbyTableHeader />
      <div className="flex flex-col">
        {games.map((game) => {
          return <LobbyRow game={game} key={game.gameToken} join={join} />;
        })}
      </div>
    </MenuCard>
  );
}

const LobbyTableHeader = () => {
  return (
    <div className="flex flex-row">
      <div className="w-[200px] text-left">Name</div>
      <div className="w-[125px]">Max Players</div>
      <div className="w-[150px]">Current Player</div>
      <div className="w-[100px]">Private</div>
    </div>
  );
};

const LobbyRow = ({
  game,
  join,
}: {
  game: Game;
  join: (gameToken: bigint) => void;
}) => {
  return (
    <div
      className="flex h-12 border-t-2 pt-2 hover:cursor-pointer hover:border-2 hover:border-amber-200"
      onClick={() => join(game.gameToken)}
    >
      <div className="w-[200px] text-left">{game.name}</div>
      <div className="w-[125px] text-center">{game.maxPlayers}</div>
      <div className="w-[150px] text-center">-</div>
      <div className="w-[100px] text-center">{game.isPrivate}</div>
    </div>
  );
};

export { Lobbies };
