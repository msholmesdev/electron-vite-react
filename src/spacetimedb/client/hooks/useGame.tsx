import { useEffect } from "react";
import { EventContext, Game } from "../module_bindings";
import { useConnectionFacade } from "../facades/useConnectionFacade";
import { useGamesFacade } from "../facades/useGameFacade";

function useGame() {
  const { conn } = useConnectionFacade();
  const { addGame } = useGamesFacade();

  useEffect(() => {
    if (!conn) return;
    const onInsert = (_ctx: EventContext, game: Game) => {
      addGame(game);
    };
    conn.db.game.onInsert(onInsert);

    return () => {
      conn.db.game.removeOnInsert(onInsert);
    };
  }, [conn]);
}

export { useGame };
