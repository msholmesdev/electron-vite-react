import { useEffect } from "react";
import { EventContext, Game, GameSecret } from "../module_bindings";
import { useConnectionFacade } from "../facades/useConnectionFacade";
import { useGamesFacade } from "../facades/useGameFacade";

function useGame() {
  const { conn } = useConnectionFacade();
  const { addGame, addGameSecret } = useGamesFacade();

  useEffect(() => {
    if (!conn) return;
    const onInsertGame = (_ctx: EventContext, game: Game) => {
      console.log("adding a new game: ", game);
      addGame(game);
    };
    conn.db.game.onInsert(onInsertGame);

    const onInsertGameSecret = (_ctx: EventContext, game: GameSecret) => {
      console.log("adding a new game secret: ", game);
      addGameSecret(game);
    };
    conn.db.gameSecret.onInsert(onInsertGameSecret);

    return () => {
      conn.db.game.removeOnInsert(onInsertGame);
      conn.db.gameSecret.removeOnInsert(onInsertGameSecret);
    };
  }, [conn]);
}

export { useGame };
