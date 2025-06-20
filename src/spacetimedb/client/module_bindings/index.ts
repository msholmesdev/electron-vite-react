// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN YOUR MODULE SOURCE CODE INSTEAD.

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import {
  AlgebraicType,
  AlgebraicValue,
  BinaryReader,
  BinaryWriter,
  CallReducerFlags,
  ConnectionId,
  DbConnectionBuilder,
  DbConnectionImpl,
  DbContext,
  ErrorContextInterface,
  Event,
  EventContextInterface,
  Identity,
  ProductType,
  ProductTypeElement,
  ReducerEventContextInterface,
  SubscriptionBuilderImpl,
  SubscriptionEventContextInterface,
  SumType,
  SumTypeVariant,
  TableCache,
  TimeDuration,
  Timestamp,
  deepEqual,
} from "@clockworklabs/spacetimedb-sdk";

// Import and reexport all reducer arg types
import { ClientConnected } from "./client_connected_reducer.ts";
export { ClientConnected };
import { ClientDisconnected } from "./client_disconnected_reducer.ts";
export { ClientDisconnected };
import { CloseLobby } from "./close_lobby_reducer.ts";
export { CloseLobby };
import { EndTurn } from "./end_turn_reducer.ts";
export { EndTurn };
import { Farmer } from "./farmer_reducer.ts";
export { Farmer };
import { Gamer } from "./gamer_reducer.ts";
export { Gamer };
import { GoldDigger } from "./gold_digger_reducer.ts";
export { GoldDigger };
import { Intern } from "./intern_reducer.ts";
export { Intern };
import { JoinLobby } from "./join_lobby_reducer.ts";
export { JoinLobby };
import { Karen } from "./karen_reducer.ts";
export { Karen };
import { Lawyer } from "./lawyer_reducer.ts";
export { Lawyer };
import { Pirate } from "./pirate_reducer.ts";
export { Pirate };
import { Politician } from "./politician_reducer.ts";
export { Politician };
import { ReadyUpInLobby } from "./ready_up_in_lobby_reducer.ts";
export { ReadyUpInLobby };
import { RemoveSelfFromLobby } from "./remove_self_from_lobby_reducer.ts";
export { RemoveSelfFromLobby };
import { SelectTurnType } from "./select_turn_type_reducer.ts";
export { SelectTurnType };
import { ServerLog } from "./server_log_reducer.ts";
export { ServerLog };
import { StartGame } from "./start_game_reducer.ts";
export { StartGame };
import { StartLobby } from "./start_lobby_reducer.ts";
export { StartLobby };
import { TaxiDriver } from "./taxi_driver_reducer.ts";
export { TaxiDriver };
import { Thief } from "./thief_reducer.ts";
export { Thief };

// Import and reexport all table handle types
import { CardTableHandle } from "./card_table.ts";
export { CardTableHandle };
import { GameTableHandle } from "./game_table.ts";
export { GameTableHandle };
import { GameSecretTableHandle } from "./game_secret_table.ts";
export { GameSecretTableHandle };
import { GuildTableHandle } from "./guild_table.ts";
export { GuildTableHandle };
import { LobbyTableHandle } from "./lobby_table.ts";
export { LobbyTableHandle };
import { LobbySecretTableHandle } from "./lobby_secret_table.ts";
export { LobbySecretTableHandle };

// Import and reexport all types
import { Card } from "./card_type.ts";
export { Card };
import { Game } from "./game_type.ts";
export { Game };
import { GameSecret } from "./game_secret_type.ts";
export { GameSecret };
import { Guild } from "./guild_type.ts";
export { Guild };
import { Guilds } from "./guilds_type.ts";
export { Guilds };
import { Lobby } from "./lobby_type.ts";
export { Lobby };
import { LobbySecret } from "./lobby_secret_type.ts";
export { LobbySecret };
import { Locations } from "./locations_type.ts";
export { Locations };
import { Turn } from "./turn_type.ts";
export { Turn };

const REMOTE_MODULE = {
  tables: {
    card: {
      tableName: "card",
      rowType: Card.getTypeScriptAlgebraicType(),
      primaryKey: "cardToken",
    },
    game: {
      tableName: "game",
      rowType: Game.getTypeScriptAlgebraicType(),
      primaryKey: "gameToken",
    },
    game_secret: {
      tableName: "game_secret",
      rowType: GameSecret.getTypeScriptAlgebraicType(),
      primaryKey: "gameToken",
    },
    guild: {
      tableName: "guild",
      rowType: Guild.getTypeScriptAlgebraicType(),
      primaryKey: "guildToken",
    },
    lobby: {
      tableName: "lobby",
      rowType: Lobby.getTypeScriptAlgebraicType(),
      primaryKey: "lobbyToken",
    },
    lobby_secret: {
      tableName: "lobby_secret",
      rowType: LobbySecret.getTypeScriptAlgebraicType(),
      primaryKey: "lobbyToken",
    },
  },
  reducers: {
    ClientConnected: {
      reducerName: "ClientConnected",
      argsType: ClientConnected.getTypeScriptAlgebraicType(),
    },
    ClientDisconnected: {
      reducerName: "ClientDisconnected",
      argsType: ClientDisconnected.getTypeScriptAlgebraicType(),
    },
    CloseLobby: {
      reducerName: "CloseLobby",
      argsType: CloseLobby.getTypeScriptAlgebraicType(),
    },
    EndTurn: {
      reducerName: "EndTurn",
      argsType: EndTurn.getTypeScriptAlgebraicType(),
    },
    Farmer: {
      reducerName: "Farmer",
      argsType: Farmer.getTypeScriptAlgebraicType(),
    },
    Gamer: {
      reducerName: "Gamer",
      argsType: Gamer.getTypeScriptAlgebraicType(),
    },
    GoldDigger: {
      reducerName: "GoldDigger",
      argsType: GoldDigger.getTypeScriptAlgebraicType(),
    },
    Intern: {
      reducerName: "Intern",
      argsType: Intern.getTypeScriptAlgebraicType(),
    },
    JoinLobby: {
      reducerName: "JoinLobby",
      argsType: JoinLobby.getTypeScriptAlgebraicType(),
    },
    Karen: {
      reducerName: "Karen",
      argsType: Karen.getTypeScriptAlgebraicType(),
    },
    Lawyer: {
      reducerName: "Lawyer",
      argsType: Lawyer.getTypeScriptAlgebraicType(),
    },
    Pirate: {
      reducerName: "Pirate",
      argsType: Pirate.getTypeScriptAlgebraicType(),
    },
    Politician: {
      reducerName: "Politician",
      argsType: Politician.getTypeScriptAlgebraicType(),
    },
    ReadyUpInLobby: {
      reducerName: "ReadyUpInLobby",
      argsType: ReadyUpInLobby.getTypeScriptAlgebraicType(),
    },
    RemoveSelfFromLobby: {
      reducerName: "RemoveSelfFromLobby",
      argsType: RemoveSelfFromLobby.getTypeScriptAlgebraicType(),
    },
    SelectTurnType: {
      reducerName: "SelectTurnType",
      argsType: SelectTurnType.getTypeScriptAlgebraicType(),
    },
    ServerLog: {
      reducerName: "ServerLog",
      argsType: ServerLog.getTypeScriptAlgebraicType(),
    },
    StartGame: {
      reducerName: "StartGame",
      argsType: StartGame.getTypeScriptAlgebraicType(),
    },
    StartLobby: {
      reducerName: "StartLobby",
      argsType: StartLobby.getTypeScriptAlgebraicType(),
    },
    TaxiDriver: {
      reducerName: "TaxiDriver",
      argsType: TaxiDriver.getTypeScriptAlgebraicType(),
    },
    Thief: {
      reducerName: "Thief",
      argsType: Thief.getTypeScriptAlgebraicType(),
    },
  },
  // Constructors which are used by the DbConnectionImpl to
  // extract type information from the generated RemoteModule.
  //
  // NOTE: This is not strictly necessary for `eventContextConstructor` because
  // all we do is build a TypeScript object which we could have done inside the
  // SDK, but if in the future we wanted to create a class this would be
  // necessary because classes have methods, so we'll keep it.
  eventContextConstructor: (imp: DbConnectionImpl, event: Event<Reducer>) => {
    return {
      ...(imp as DbConnection),
      event
    }
  },
  dbViewConstructor: (imp: DbConnectionImpl) => {
    return new RemoteTables(imp);
  },
  reducersConstructor: (imp: DbConnectionImpl, setReducerFlags: SetReducerFlags) => {
    return new RemoteReducers(imp, setReducerFlags);
  },
  setReducerFlagsConstructor: () => {
    return new SetReducerFlags();
  }
}

// A type representing all the possible variants of a reducer.
export type Reducer = never
| { name: "ClientConnected", args: ClientConnected }
| { name: "ClientDisconnected", args: ClientDisconnected }
| { name: "CloseLobby", args: CloseLobby }
| { name: "EndTurn", args: EndTurn }
| { name: "Farmer", args: Farmer }
| { name: "Gamer", args: Gamer }
| { name: "GoldDigger", args: GoldDigger }
| { name: "Intern", args: Intern }
| { name: "JoinLobby", args: JoinLobby }
| { name: "Karen", args: Karen }
| { name: "Lawyer", args: Lawyer }
| { name: "Pirate", args: Pirate }
| { name: "Politician", args: Politician }
| { name: "ReadyUpInLobby", args: ReadyUpInLobby }
| { name: "RemoveSelfFromLobby", args: RemoveSelfFromLobby }
| { name: "SelectTurnType", args: SelectTurnType }
| { name: "ServerLog", args: ServerLog }
| { name: "StartGame", args: StartGame }
| { name: "StartLobby", args: StartLobby }
| { name: "TaxiDriver", args: TaxiDriver }
| { name: "Thief", args: Thief }
;

export class RemoteReducers {
  constructor(private connection: DbConnectionImpl, private setCallReducerFlags: SetReducerFlags) {}

  onClientConnected(callback: (ctx: ReducerEventContext) => void) {
    this.connection.onReducer("ClientConnected", callback);
  }

  removeOnClientConnected(callback: (ctx: ReducerEventContext) => void) {
    this.connection.offReducer("ClientConnected", callback);
  }

  onClientDisconnected(callback: (ctx: ReducerEventContext) => void) {
    this.connection.onReducer("ClientDisconnected", callback);
  }

  removeOnClientDisconnected(callback: (ctx: ReducerEventContext) => void) {
    this.connection.offReducer("ClientDisconnected", callback);
  }

  closeLobby(gameToken: bigint) {
    const __args = { gameToken };
    let __writer = new BinaryWriter(1024);
    CloseLobby.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("CloseLobby", __argsBuffer, this.setCallReducerFlags.closeLobbyFlags);
  }

  onCloseLobby(callback: (ctx: ReducerEventContext, gameToken: bigint) => void) {
    this.connection.onReducer("CloseLobby", callback);
  }

  removeOnCloseLobby(callback: (ctx: ReducerEventContext, gameToken: bigint) => void) {
    this.connection.offReducer("CloseLobby", callback);
  }

  endTurn(lobbyToken: bigint) {
    const __args = { lobbyToken };
    let __writer = new BinaryWriter(1024);
    EndTurn.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("EndTurn", __argsBuffer, this.setCallReducerFlags.endTurnFlags);
  }

  onEndTurn(callback: (ctx: ReducerEventContext, lobbyToken: bigint) => void) {
    this.connection.onReducer("EndTurn", callback);
  }

  removeOnEndTurn(callback: (ctx: ReducerEventContext, lobbyToken: bigint) => void) {
    this.connection.offReducer("EndTurn", callback);
  }

  farmer(cardToken: bigint, lobbyToken: bigint) {
    const __args = { cardToken, lobbyToken };
    let __writer = new BinaryWriter(1024);
    Farmer.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("Farmer", __argsBuffer, this.setCallReducerFlags.farmerFlags);
  }

  onFarmer(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint) => void) {
    this.connection.onReducer("Farmer", callback);
  }

  removeOnFarmer(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint) => void) {
    this.connection.offReducer("Farmer", callback);
  }

  gamer(cardToken: bigint, lobbyToken: bigint, guildToken: bigint) {
    const __args = { cardToken, lobbyToken, guildToken };
    let __writer = new BinaryWriter(1024);
    Gamer.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("Gamer", __argsBuffer, this.setCallReducerFlags.gamerFlags);
  }

  onGamer(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint, guildToken: bigint) => void) {
    this.connection.onReducer("Gamer", callback);
  }

  removeOnGamer(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint, guildToken: bigint) => void) {
    this.connection.offReducer("Gamer", callback);
  }

  goldDigger(cardToken: bigint, lobbyToken: bigint) {
    const __args = { cardToken, lobbyToken };
    let __writer = new BinaryWriter(1024);
    GoldDigger.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("GoldDigger", __argsBuffer, this.setCallReducerFlags.goldDiggerFlags);
  }

  onGoldDigger(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint) => void) {
    this.connection.onReducer("GoldDigger", callback);
  }

  removeOnGoldDigger(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint) => void) {
    this.connection.offReducer("GoldDigger", callback);
  }

  intern(cardToken: bigint, cardToReactivateToken: bigint, lobbyToken: bigint) {
    const __args = { cardToken, cardToReactivateToken, lobbyToken };
    let __writer = new BinaryWriter(1024);
    Intern.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("Intern", __argsBuffer, this.setCallReducerFlags.internFlags);
  }

  onIntern(callback: (ctx: ReducerEventContext, cardToken: bigint, cardToReactivateToken: bigint, lobbyToken: bigint) => void) {
    this.connection.onReducer("Intern", callback);
  }

  removeOnIntern(callback: (ctx: ReducerEventContext, cardToken: bigint, cardToReactivateToken: bigint, lobbyToken: bigint) => void) {
    this.connection.offReducer("Intern", callback);
  }

  joinLobby(gameToken: bigint) {
    const __args = { gameToken };
    let __writer = new BinaryWriter(1024);
    JoinLobby.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("JoinLobby", __argsBuffer, this.setCallReducerFlags.joinLobbyFlags);
  }

  onJoinLobby(callback: (ctx: ReducerEventContext, gameToken: bigint) => void) {
    this.connection.onReducer("JoinLobby", callback);
  }

  removeOnJoinLobby(callback: (ctx: ReducerEventContext, gameToken: bigint) => void) {
    this.connection.offReducer("JoinLobby", callback);
  }

  karen(cardToken: bigint, lobbyToken: bigint, guildToken: bigint) {
    const __args = { cardToken, lobbyToken, guildToken };
    let __writer = new BinaryWriter(1024);
    Karen.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("Karen", __argsBuffer, this.setCallReducerFlags.karenFlags);
  }

  onKaren(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint, guildToken: bigint) => void) {
    this.connection.onReducer("Karen", callback);
  }

  removeOnKaren(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint, guildToken: bigint) => void) {
    this.connection.offReducer("Karen", callback);
  }

  lawyer(cardToken: bigint, lobbyToken: bigint, cardTokenFromResumeToCompany1: bigint, cardTokenFromResumeToCompany2: bigint) {
    const __args = { cardToken, lobbyToken, cardTokenFromResumeToCompany1, cardTokenFromResumeToCompany2 };
    let __writer = new BinaryWriter(1024);
    Lawyer.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("Lawyer", __argsBuffer, this.setCallReducerFlags.lawyerFlags);
  }

  onLawyer(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint, cardTokenFromResumeToCompany1: bigint, cardTokenFromResumeToCompany2: bigint) => void) {
    this.connection.onReducer("Lawyer", callback);
  }

  removeOnLawyer(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint, cardTokenFromResumeToCompany1: bigint, cardTokenFromResumeToCompany2: bigint) => void) {
    this.connection.offReducer("Lawyer", callback);
  }

  pirate(yourCardToken: bigint, anotherCardToken: bigint, lobbyToken: bigint) {
    const __args = { yourCardToken, anotherCardToken, lobbyToken };
    let __writer = new BinaryWriter(1024);
    Pirate.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("Pirate", __argsBuffer, this.setCallReducerFlags.pirateFlags);
  }

  onPirate(callback: (ctx: ReducerEventContext, yourCardToken: bigint, anotherCardToken: bigint, lobbyToken: bigint) => void) {
    this.connection.onReducer("Pirate", callback);
  }

  removeOnPirate(callback: (ctx: ReducerEventContext, yourCardToken: bigint, anotherCardToken: bigint, lobbyToken: bigint) => void) {
    this.connection.offReducer("Pirate", callback);
  }

  politician(playCardToken: bigint, resumeCardToken: bigint, lobbyToken: bigint, otherBossLobbyToken: bigint) {
    const __args = { playCardToken, resumeCardToken, lobbyToken, otherBossLobbyToken };
    let __writer = new BinaryWriter(1024);
    Politician.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("Politician", __argsBuffer, this.setCallReducerFlags.politicianFlags);
  }

  onPolitician(callback: (ctx: ReducerEventContext, playCardToken: bigint, resumeCardToken: bigint, lobbyToken: bigint, otherBossLobbyToken: bigint) => void) {
    this.connection.onReducer("Politician", callback);
  }

  removeOnPolitician(callback: (ctx: ReducerEventContext, playCardToken: bigint, resumeCardToken: bigint, lobbyToken: bigint, otherBossLobbyToken: bigint) => void) {
    this.connection.offReducer("Politician", callback);
  }

  readyUpInLobby(lobbyToken: bigint) {
    const __args = { lobbyToken };
    let __writer = new BinaryWriter(1024);
    ReadyUpInLobby.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("ReadyUpInLobby", __argsBuffer, this.setCallReducerFlags.readyUpInLobbyFlags);
  }

  onReadyUpInLobby(callback: (ctx: ReducerEventContext, lobbyToken: bigint) => void) {
    this.connection.onReducer("ReadyUpInLobby", callback);
  }

  removeOnReadyUpInLobby(callback: (ctx: ReducerEventContext, lobbyToken: bigint) => void) {
    this.connection.offReducer("ReadyUpInLobby", callback);
  }

  removeSelfFromLobby(gameToken: bigint) {
    const __args = { gameToken };
    let __writer = new BinaryWriter(1024);
    RemoveSelfFromLobby.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("RemoveSelfFromLobby", __argsBuffer, this.setCallReducerFlags.removeSelfFromLobbyFlags);
  }

  onRemoveSelfFromLobby(callback: (ctx: ReducerEventContext, gameToken: bigint) => void) {
    this.connection.onReducer("RemoveSelfFromLobby", callback);
  }

  removeOnRemoveSelfFromLobby(callback: (ctx: ReducerEventContext, gameToken: bigint) => void) {
    this.connection.offReducer("RemoveSelfFromLobby", callback);
  }

  selectTurnType(lobbyToken: bigint, turnType: Turn) {
    const __args = { lobbyToken, turnType };
    let __writer = new BinaryWriter(1024);
    SelectTurnType.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("SelectTurnType", __argsBuffer, this.setCallReducerFlags.selectTurnTypeFlags);
  }

  onSelectTurnType(callback: (ctx: ReducerEventContext, lobbyToken: bigint, turnType: Turn) => void) {
    this.connection.onReducer("SelectTurnType", callback);
  }

  removeOnSelectTurnType(callback: (ctx: ReducerEventContext, lobbyToken: bigint, turnType: Turn) => void) {
    this.connection.offReducer("SelectTurnType", callback);
  }

  serverLog(logMessage: string) {
    const __args = { logMessage };
    let __writer = new BinaryWriter(1024);
    ServerLog.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("ServerLog", __argsBuffer, this.setCallReducerFlags.serverLogFlags);
  }

  onServerLog(callback: (ctx: ReducerEventContext, logMessage: string) => void) {
    this.connection.onReducer("ServerLog", callback);
  }

  removeOnServerLog(callback: (ctx: ReducerEventContext, logMessage: string) => void) {
    this.connection.offReducer("ServerLog", callback);
  }

  startGame(gameToken: bigint) {
    const __args = { gameToken };
    let __writer = new BinaryWriter(1024);
    StartGame.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("StartGame", __argsBuffer, this.setCallReducerFlags.startGameFlags);
  }

  onStartGame(callback: (ctx: ReducerEventContext, gameToken: bigint) => void) {
    this.connection.onReducer("StartGame", callback);
  }

  removeOnStartGame(callback: (ctx: ReducerEventContext, gameToken: bigint) => void) {
    this.connection.offReducer("StartGame", callback);
  }

  startLobby(name: string, maxPlayers: number, isPrivate: boolean | undefined) {
    const __args = { name, maxPlayers, isPrivate };
    let __writer = new BinaryWriter(1024);
    StartLobby.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("StartLobby", __argsBuffer, this.setCallReducerFlags.startLobbyFlags);
  }

  onStartLobby(callback: (ctx: ReducerEventContext, name: string, maxPlayers: number, isPrivate: boolean | undefined) => void) {
    this.connection.onReducer("StartLobby", callback);
  }

  removeOnStartLobby(callback: (ctx: ReducerEventContext, name: string, maxPlayers: number, isPrivate: boolean | undefined) => void) {
    this.connection.offReducer("StartLobby", callback);
  }

  taxiDriver(cardToken: bigint, lobbyToken: bigint, x1: number, x2: number) {
    const __args = { cardToken, lobbyToken, x1, x2 };
    let __writer = new BinaryWriter(1024);
    TaxiDriver.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("TaxiDriver", __argsBuffer, this.setCallReducerFlags.taxiDriverFlags);
  }

  onTaxiDriver(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint, x1: number, x2: number) => void) {
    this.connection.onReducer("TaxiDriver", callback);
  }

  removeOnTaxiDriver(callback: (ctx: ReducerEventContext, cardToken: bigint, lobbyToken: bigint, x1: number, x2: number) => void) {
    this.connection.offReducer("TaxiDriver", callback);
  }

  thief(playCardToken: bigint, lobbyToken: bigint, otherBossLobbyToken: bigint) {
    const __args = { playCardToken, lobbyToken, otherBossLobbyToken };
    let __writer = new BinaryWriter(1024);
    Thief.getTypeScriptAlgebraicType().serialize(__writer, __args);
    let __argsBuffer = __writer.getBuffer();
    this.connection.callReducer("Thief", __argsBuffer, this.setCallReducerFlags.thiefFlags);
  }

  onThief(callback: (ctx: ReducerEventContext, playCardToken: bigint, lobbyToken: bigint, otherBossLobbyToken: bigint) => void) {
    this.connection.onReducer("Thief", callback);
  }

  removeOnThief(callback: (ctx: ReducerEventContext, playCardToken: bigint, lobbyToken: bigint, otherBossLobbyToken: bigint) => void) {
    this.connection.offReducer("Thief", callback);
  }

}

export class SetReducerFlags {
  closeLobbyFlags: CallReducerFlags = 'FullUpdate';
  closeLobby(flags: CallReducerFlags) {
    this.closeLobbyFlags = flags;
  }

  endTurnFlags: CallReducerFlags = 'FullUpdate';
  endTurn(flags: CallReducerFlags) {
    this.endTurnFlags = flags;
  }

  farmerFlags: CallReducerFlags = 'FullUpdate';
  farmer(flags: CallReducerFlags) {
    this.farmerFlags = flags;
  }

  gamerFlags: CallReducerFlags = 'FullUpdate';
  gamer(flags: CallReducerFlags) {
    this.gamerFlags = flags;
  }

  goldDiggerFlags: CallReducerFlags = 'FullUpdate';
  goldDigger(flags: CallReducerFlags) {
    this.goldDiggerFlags = flags;
  }

  internFlags: CallReducerFlags = 'FullUpdate';
  intern(flags: CallReducerFlags) {
    this.internFlags = flags;
  }

  joinLobbyFlags: CallReducerFlags = 'FullUpdate';
  joinLobby(flags: CallReducerFlags) {
    this.joinLobbyFlags = flags;
  }

  karenFlags: CallReducerFlags = 'FullUpdate';
  karen(flags: CallReducerFlags) {
    this.karenFlags = flags;
  }

  lawyerFlags: CallReducerFlags = 'FullUpdate';
  lawyer(flags: CallReducerFlags) {
    this.lawyerFlags = flags;
  }

  pirateFlags: CallReducerFlags = 'FullUpdate';
  pirate(flags: CallReducerFlags) {
    this.pirateFlags = flags;
  }

  politicianFlags: CallReducerFlags = 'FullUpdate';
  politician(flags: CallReducerFlags) {
    this.politicianFlags = flags;
  }

  readyUpInLobbyFlags: CallReducerFlags = 'FullUpdate';
  readyUpInLobby(flags: CallReducerFlags) {
    this.readyUpInLobbyFlags = flags;
  }

  removeSelfFromLobbyFlags: CallReducerFlags = 'FullUpdate';
  removeSelfFromLobby(flags: CallReducerFlags) {
    this.removeSelfFromLobbyFlags = flags;
  }

  selectTurnTypeFlags: CallReducerFlags = 'FullUpdate';
  selectTurnType(flags: CallReducerFlags) {
    this.selectTurnTypeFlags = flags;
  }

  serverLogFlags: CallReducerFlags = 'FullUpdate';
  serverLog(flags: CallReducerFlags) {
    this.serverLogFlags = flags;
  }

  startGameFlags: CallReducerFlags = 'FullUpdate';
  startGame(flags: CallReducerFlags) {
    this.startGameFlags = flags;
  }

  startLobbyFlags: CallReducerFlags = 'FullUpdate';
  startLobby(flags: CallReducerFlags) {
    this.startLobbyFlags = flags;
  }

  taxiDriverFlags: CallReducerFlags = 'FullUpdate';
  taxiDriver(flags: CallReducerFlags) {
    this.taxiDriverFlags = flags;
  }

  thiefFlags: CallReducerFlags = 'FullUpdate';
  thief(flags: CallReducerFlags) {
    this.thiefFlags = flags;
  }

}

export class RemoteTables {
  constructor(private connection: DbConnectionImpl) {}

  get card(): CardTableHandle {
    return new CardTableHandle(this.connection.clientCache.getOrCreateTable<Card>(REMOTE_MODULE.tables.card));
  }

  get game(): GameTableHandle {
    return new GameTableHandle(this.connection.clientCache.getOrCreateTable<Game>(REMOTE_MODULE.tables.game));
  }

  get gameSecret(): GameSecretTableHandle {
    return new GameSecretTableHandle(this.connection.clientCache.getOrCreateTable<GameSecret>(REMOTE_MODULE.tables.game_secret));
  }

  get guild(): GuildTableHandle {
    return new GuildTableHandle(this.connection.clientCache.getOrCreateTable<Guild>(REMOTE_MODULE.tables.guild));
  }

  get lobby(): LobbyTableHandle {
    return new LobbyTableHandle(this.connection.clientCache.getOrCreateTable<Lobby>(REMOTE_MODULE.tables.lobby));
  }

  get lobbySecret(): LobbySecretTableHandle {
    return new LobbySecretTableHandle(this.connection.clientCache.getOrCreateTable<LobbySecret>(REMOTE_MODULE.tables.lobby_secret));
  }
}

export class SubscriptionBuilder extends SubscriptionBuilderImpl<RemoteTables, RemoteReducers, SetReducerFlags> { }

export class DbConnection extends DbConnectionImpl<RemoteTables, RemoteReducers, SetReducerFlags> {
  static builder = (): DbConnectionBuilder<DbConnection, ErrorContext, SubscriptionEventContext> => {
    return new DbConnectionBuilder<DbConnection, ErrorContext, SubscriptionEventContext>(REMOTE_MODULE, (imp: DbConnectionImpl) => imp as DbConnection);
  }
  subscriptionBuilder = (): SubscriptionBuilder => {
    return new SubscriptionBuilder(this);
  }
}

export type EventContext = EventContextInterface<RemoteTables, RemoteReducers, SetReducerFlags, Reducer>;
export type ReducerEventContext = ReducerEventContextInterface<RemoteTables, RemoteReducers, SetReducerFlags, Reducer>;
export type SubscriptionEventContext = SubscriptionEventContextInterface<RemoteTables, RemoteReducers, SetReducerFlags>;
export type ErrorContext = ErrorContextInterface<RemoteTables, RemoteReducers, SetReducerFlags>;
