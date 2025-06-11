import { Button } from "@/components/Button";
import { MenuCard } from "./Menu";
import { useLobbyFacade } from "@/spacetimedb/client/facades/useLobbyFacade";
import { Lobby as LobbyType } from "@/spacetimedb/client/module_bindings";
import { useGameFacade } from "@/spacetimedb/client/facades/useGameFacade";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Lobby() {
  const navigate = useNavigate();
  const {
    leaveLobbyReducer,
    lobbies,
    connectedLobby,
    closeLobbyReducer,
    readyUp,
  } = useLobbyFacade();
  const connectedLobbies = lobbies.filter(
    (lob) =>
      lob.isConnected == true && connectedLobby?.gameToken == lob.gameToken
  );
  const { isHost, connectedGame, startGame } = useGameFacade();

  const close = () => {
    if (connectedLobby) {
      console.log("trying to leave lobby: ", connectedLobby.gameToken);
      closeLobbyReducer(connectedLobby.gameToken);
    }
  };

  const leave = () => {
    if (connectedLobby) {
      console.log("trying to leave lobby: ", connectedLobby.gameToken);
      leaveLobbyReducer(connectedLobby.gameToken);
    }
  };

  useEffect(() => {
    if (connectedLobby) {
      console.log(connectedLobby);
      return;
    }
    navigate("/menu");
  }, [connectedLobby]);

  useEffect(() => {
    if (connectedGame && connectedGame.hasStarted) {
      navigate("/game");
    }
  }, [connectedGame]);

  return (
    <MenuCard>
      <div className="text-3xl">Lobby</div>
      <div className="flex flex-col">
        {connectedLobbies.map((lobby) => {
          return <PlayerRow lobby={lobby} key={lobby.lobbyToken} />;
        })}
      </div>
      {isHost ? (
        <div className="flex flex-row gap-4">
          <Button onClick={startGame}>Start</Button>
          <Button onClick={close}>Close Lobby</Button>
        </div>
      ) : (
        <div className="flex flex-row gap-4">
          {connectedLobby?.isReady ? (
            "Ready"
          ) : (
            <Button onClick={readyUp}>Ready up</Button>
          )}
          <Button onClick={leave}>Leave</Button>
        </div>
      )}
    </MenuCard>
  );
}

const PlayerRow = ({ lobby }: { lobby: LobbyType }) => {
  return (
    <div className="flex h-12 border-t-2 pt-2 hover:cursor-pointer hover:border-2 hover:border-amber-200">
      <div className="w-[200px] text-left">{String(lobby.lobbyToken)}</div>
    </div>
  );
};

export { Lobby };
