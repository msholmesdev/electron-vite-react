import { Guilds, Locations } from "../module_bindings";
import { useCardStore } from "./stores/useCardStore";
import { useConnectionFacade } from "./useConnectionFacade";
import { useGameFacade } from "./useGameFacade";
import { useLobbyFacade } from "./useLobbyFacade";

export const useCardFacade = () => {
  const cards = useCardStore((state) => state.cards);
  const addCard = useCardStore((state) => state.addCard);
  const removeCard = useCardStore((state) => state.removeCard);
  const updateCard = useCardStore((state) => state.updateCard);
  const clearCards = useCardStore((state) => state.clearCards);
  const { connectedGame } = useGameFacade();
  const { conn } = useConnectionFacade();
  const { connectedLobby } = useLobbyFacade();

  const hasFailedConnection = () => {
    if (!conn) {
      console.warn("no connection");
      return true;
    }

    if (!connectedGame) {
      console.warn("no game");
      return true;
    }

    if (!connectedLobby) {
      console.warn("no game");
      return true;
    }

    return false;
  };

  const getUnusedCardCountByTypeInCompany = (cardType: Guilds) => {
    return getUnusedCardsByTypeInCompany(cardType).length;
  };

  const getUnusedCardsByTypeInCompany = (cardType: Guilds) => {
    return getUnusedCardsByTypeAndLocation(
      cardType,
      Locations.Company as Locations.Company
    );
  };

  const getUnusedCardsByTypeAndLocation = (
    cardType: Guilds,
    cardLocation: Locations
  ) => {
    if (!connectedLobby) {
      return [];
    }
    return getUnusedCardsByTypeLocationLobbyId(
      cardType,
      cardLocation,
      connectedLobby.lobbyToken
    );
  };

  const getUnusedCardsByTypeLocationLobbyId = (
    cardType: Guilds,
    cardLocation: Locations,
    lobbyToken: bigint
  ) => {
    return cards.filter(
      (card) =>
        card.lobbyToken === lobbyToken &&
        card.isUsed === false &&
        card.location === cardLocation &&
        card.representative === cardType
    );
  };

  const goldDiggerReducer = () => {
    if (hasFailedConnection()) {
      return;
    }

    const validCards = getUnusedCardsByTypeInCompany(
      Guilds.GoldDigger as Guilds.GoldDigger
    );

    if (validCards.length === 0) {
      return;
    }

    const card = validCards[0];

    if (connectedLobby && connectedGame && conn) {
      conn.reducers.goldDigger(card.cardToken, connectedLobby.lobbyToken);
    }
  };

  const pirateReducer = (EnemyCardTokenInCompany: bigint) => {
    if (hasFailedConnection()) {
      return;
    }

    const validCards = getUnusedCardsByTypeInCompany(
      Guilds.Pirate as Guilds.Pirate
    );

    if (validCards.length === 0) {
      return;
    }

    const card = validCards[0];

    if (connectedLobby && connectedGame && conn) {
      conn.reducers.pirate(
        card.cardToken,
        EnemyCardTokenInCompany,
        connectedLobby.lobbyToken
      );
    }
  };

  const politicianReducer = (
    resumeCardToken: bigint,
    otherBossLobbyToken: bigint
  ) => {
    if (hasFailedConnection()) {
      return;
    }

    const validCards = getUnusedCardsByTypeInCompany(
      Guilds.Politician as Guilds.Politician
    );

    if (validCards.length === 0) {
      return;
    }

    const card = validCards[0];

    if (connectedLobby && connectedGame && conn) {
      conn.reducers.politician(
        card.cardToken,
        resumeCardToken,
        connectedLobby.lobbyToken,
        otherBossLobbyToken
      );
    }
  };

  const thiefReducer = (otherBossLobbyToken: bigint) => {
    if (hasFailedConnection()) {
      return;
    }

    const validCards = getUnusedCardsByTypeInCompany(
      Guilds.Thief as Guilds.Thief
    );

    if (validCards.length === 0) {
      return;
    }

    const card = validCards[0];

    if (connectedLobby && connectedGame && conn) {
      conn.reducers.thief(
        card.cardToken,
        connectedLobby.lobbyToken,
        otherBossLobbyToken
      );
    }
  };

  const farmerReducer = () => {
    if (hasFailedConnection()) {
      return;
    }

    const validCards = getUnusedCardsByTypeInCompany(
      Guilds.Farmer as Guilds.Farmer
    );

    if (validCards.length === 0) {
      return;
    }

    const card = validCards[0];

    if (connectedLobby && connectedGame && conn) {
      conn.reducers.farmer(card.cardToken, connectedLobby.lobbyToken);
    }
  };

  const lawyerReducer = (
    resumeCardToken1: bigint,
    resumeCardToken2: bigint
  ) => {
    if (hasFailedConnection()) {
      return;
    }

    const validCards = getUnusedCardsByTypeInCompany(
      Guilds.Lawyer as Guilds.Lawyer
    );

    if (validCards.length === 0) {
      return;
    }

    const card = validCards[0];

    if (connectedLobby && connectedGame && conn) {
      conn.reducers.lawyer(
        card.cardToken,
        connectedLobby.lobbyToken,
        resumeCardToken1,
        resumeCardToken2
      );
    }
  };

  const gamerReducer = (guildToken: bigint) => {
    if (hasFailedConnection()) {
      return;
    }

    const validCards = getUnusedCardsByTypeInCompany(
      Guilds.Gamer as Guilds.Gamer
    );

    if (validCards.length === 0) {
      return;
    }

    const card = validCards[0];

    if (connectedLobby && connectedGame && conn) {
      conn.reducers.gamer(
        card.cardToken,
        connectedLobby.lobbyToken,
        guildToken
      );
    }
  };

  const karenReducer = (guildToken: bigint) => {
    if (hasFailedConnection()) {
      return;
    }

    const validCards = getUnusedCardsByTypeInCompany(
      Guilds.Gamer as Guilds.Gamer
    );

    if (validCards.length === 0) {
      return;
    }

    const card = validCards[0];

    if (connectedLobby && connectedGame && conn) {
      conn.reducers.karen(
        card.cardToken,
        connectedLobby.lobbyToken,
        guildToken
      );
    }
  };

  const taxiReducer = (x1: number, x2: number) => {
    if (hasFailedConnection()) {
      return;
    }

    const validCards = getUnusedCardsByTypeInCompany(
      Guilds.TaxiDriver as Guilds.TaxiDriver
    );

    if (validCards.length === 0) {
      return;
    }

    const card = validCards[0];

    if (connectedLobby && connectedGame && conn) {
      conn.reducers.taxiDriver(
        card.cardToken,
        connectedLobby.lobbyToken,
        x1,
        x2
      );
    }
  };

  const internReducer = (cardToReactivateToken: bigint) => {
    if (hasFailedConnection()) {
      return;
    }

    const validCards = getUnusedCardsByTypeInCompany(
      Guilds.Intern as Guilds.Intern
    );

    if (validCards.length === 0) {
      return;
    }

    const card = validCards[0];

    if (connectedLobby && connectedGame && conn) {
      conn.reducers.intern(
        card.cardToken,
        cardToReactivateToken,
        connectedLobby.lobbyToken
      );
    }
  };

  return {
    cards,
    addCard,
    removeCard,
    updateCard,
    clearCards,
    getUnusedCardCountByTypeInCompany,
    farmerReducer,
    goldDiggerReducer,
    pirateReducer,
    politicianReducer,
    thiefReducer,
    lawyerReducer,
    gamerReducer,
    karenReducer,
    taxiReducer,
    internReducer,
  };
};
