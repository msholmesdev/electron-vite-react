import { useEffect } from "react";
import { EventContext, Game, GameSecret } from "../module_bindings";
import { useConnectionFacade } from "../facades/useConnectionFacade";
import { useGameFacade } from "../facades/useGameFacade";

function useGame() {
  const { conn } = useConnectionFacade();
  const { addGame, addGameSecret, removeGame, removeGameSecret, updateGame } =
    useGameFacade();

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

    const onDeleteGame = (_ctx: EventContext, game: Game) => {
      console.log("removing game:", game);
      removeGame(game);
    };
    conn.db.game.onDelete(onDeleteGame);

    const onDeleteGameSecret = (_ctx: EventContext, gameSecret: GameSecret) => {
      console.log("removing game secret:", gameSecret);
      removeGameSecret(gameSecret);
    };
    conn.db.gameSecret.onDelete(onDeleteGameSecret);

    const onUpdateGame = (
      _ctx: EventContext,
      _oldGame: Game,
      newGame: Game
    ) => {
      updateGame(newGame);
    };
    conn.db.game.onUpdate(onUpdateGame);

    return () => {
      conn.db.game.removeOnInsert(onInsertGame);
      conn.db.gameSecret.removeOnInsert(onInsertGameSecret);
    };
  }, [conn]);
}

export { useGame };
