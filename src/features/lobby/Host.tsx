import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import { Slider } from "@/components/Slider";
import { useGameFacade } from "@/spacetimedb/client/facades/useGameFacade";
import { MenuCard } from "./Menu";
import { PageLink } from "@/components/PageLink";

function Host() {
  const { gamesSecret, hostGame, PLAYER_MIN, PLAYER_MAX } = useGameFacade();
  const [lobbyName, setLobbyName] = useState("");
  const [playerCount, setPlayerCount] = useState(4);
  const [isPrivate, setIsPrivate] = useState(false);

  const onClick = () => {
    hostGame(lobbyName, playerCount, isPrivate);
  };

  useEffect(() => {
    console.log("added game", gamesSecret);
    if (gamesSecret) {
      const gameSecret = gamesSecret[0];
      console.log(gameSecret.isActive);
    }
  }, [gamesSecret]);

  return (
    <MenuCard>
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
    </MenuCard>
  );
}

export { Host };
