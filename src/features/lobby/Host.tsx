import { useConnectionFacade } from "@/spacetimedb/client/facades/useConnectionFacade";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import { Slider } from "@/components/Slider";
import { useGamesFacade } from "@/spacetimedb/client/facades/useGameFacade";

function Host() {
  const { conn } = useConnectionFacade();
  const { gamesSecret } = useGamesFacade();
  const [lobbyName, setLobbyName] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [playerCount, setPlayerCount] = useState(4);
  const PLAYER_MIN = 3;
  const PLAYER_MAX = 10;
  const MIN_LOBBY_LENGTH = 4;
  const MAX_LOBBY_LENGTH = 100;

  const onClick = () => {
    if (conn) {
      if (
        lobbyName.length < MIN_LOBBY_LENGTH ||
        lobbyName.length > MAX_LOBBY_LENGTH
      ) {
        console.log("lobby name to short");
        return;
      }
      if (playerCount < PLAYER_MIN || playerCount > PLAYER_MAX) {
        console.log("player count out of bounds");
        return;
      }
      try {
        conn.reducers.startLobby(lobbyName, playerCount, isPrivate);
        // Success: update UI or notify user
      } catch (error) {
        console.error("Reducer call failed:", error);
        // Handle the error (e.g., show a toast or alert)
      }
    }
  };

  useEffect(() => {
    console.log("added game", gamesSecret);
  }, [gamesSecret]);

  return (
    <div>
      <div className="bg-gray-800 w-full h-full border rounded-xl border-amber-500 flex flex-col items-center p-16 gap-4">
        <Input
          onChange={(e) => setLobbyName(e.target.value)}
          value={lobbyName}
          label="Lobby name"
        />
        <Slider
          label="Max players"
          min={PLAYER_MIN}
          max={PLAYER_MAX}
          value={playerCount}
          onChange={(e) => setPlayerCount(Number(e.target.value))}
        />
        <Checkbox
          label="Make lobby private"
          checked={isPrivate}
          onChange={(e) => setIsPrivate(e.target.checked)}
        />
        <Button onClick={onClick}>Host game</Button>
      </div>
    </div>
  );
}

export { Host };
