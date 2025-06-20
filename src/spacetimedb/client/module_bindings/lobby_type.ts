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
import { Turn as __Turn } from "./turn_type";
import { Guilds as __Guilds } from "./guilds_type";

export type Lobby = {
  lobbyToken: bigint,
  gameToken: bigint,
  isConnected: boolean,
  isReady: boolean,
  representative: __Guilds | undefined,
  turnPosition: number | undefined,
  turnType: __Turn | undefined,
};

/**
 * A namespace for generated helper functions.
 */
export namespace Lobby {
  /**
  * A function which returns this type represented as an AlgebraicType.
  * This function is derived from the AlgebraicType used to generate this type.
  */
  export function getTypeScriptAlgebraicType(): AlgebraicType {
    return AlgebraicType.createProductType([
      new ProductTypeElement("lobbyToken", AlgebraicType.createU64Type()),
      new ProductTypeElement("gameToken", AlgebraicType.createU64Type()),
      new ProductTypeElement("isConnected", AlgebraicType.createBoolType()),
      new ProductTypeElement("isReady", AlgebraicType.createBoolType()),
      new ProductTypeElement("representative", AlgebraicType.createOptionType(__Guilds.getTypeScriptAlgebraicType())),
      new ProductTypeElement("turnPosition", AlgebraicType.createOptionType(AlgebraicType.createU8Type())),
      new ProductTypeElement("turnType", AlgebraicType.createOptionType(__Turn.getTypeScriptAlgebraicType())),
    ]);
  }

  export function serialize(writer: BinaryWriter, value: Lobby): void {
    Lobby.getTypeScriptAlgebraicType().serialize(writer, value);
  }

  export function deserialize(reader: BinaryReader): Lobby {
    return Lobby.getTypeScriptAlgebraicType().deserialize(reader);
  }

}


