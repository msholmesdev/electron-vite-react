import { useEffect } from "react";
import { Card, EventContext } from "../module_bindings";
import { useConnectionFacade } from "../facades/useConnectionFacade";
import { useCardFacade } from "../facades/useCardFacade";

function useCard() {
  const { conn } = useConnectionFacade();
  const { addCard, removeCard, updateCard } = useCardFacade();

  useEffect(() => {
    if (!conn) return;

    const onInsertCard = (_ctx: EventContext, card: Card) => {
      addCard(card);
    };

    const onDeleteCard = (_ctx: EventContext, card: Card) => {
      console.log("removing card:", card);
      removeCard(card);
    };

    const onUpdateCard = (
      _ctx: EventContext,
      _oldCard: Card,
      newCard: Card
    ) => {
      console.log("updating card:", newCard);
      updateCard(newCard);
    };

    conn.db.card.onInsert(onInsertCard);
    conn.db.card.onDelete(onDeleteCard);
    conn.db.card.onUpdate(onUpdateCard);

    return () => {
      conn.db.card.removeOnInsert(onInsertCard);
      conn.db.card.removeOnDelete(onDeleteCard);
      conn.db.card.removeOnUpdate(onUpdateCard);
    };
  }, [conn]);
}

export { useCard };
