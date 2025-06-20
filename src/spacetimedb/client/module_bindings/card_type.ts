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
import { Guilds as __Guilds } from "./guilds_type";
import { Locations as __Locations } from "./locations_type";

export type Card = {
  cardToken: bigint,
  lobbyToken: bigint | undefined,
  gameToken: bigint,
  representative: __Guilds,
  location: __Locations,
  isUsed: boolean,
};

/**
 * A namespace for generated helper functions.
 */
export namespace Card {
  /**
  * A function which returns this type represented as an AlgebraicType.
  * This function is derived from the AlgebraicType used to generate this type.
  */
  export function getTypeScriptAlgebraicType(): AlgebraicType {
    return AlgebraicType.createProductType([
      new ProductTypeElement("cardToken", AlgebraicType.createU64Type()),
      new ProductTypeElement("lobbyToken", AlgebraicType.createOptionType(AlgebraicType.createU64Type())),
      new ProductTypeElement("gameToken", AlgebraicType.createU64Type()),
      new ProductTypeElement("representative", __Guilds.getTypeScriptAlgebraicType()),
      new ProductTypeElement("location", __Locations.getTypeScriptAlgebraicType()),
      new ProductTypeElement("isUsed", AlgebraicType.createBoolType()),
    ]);
  }

  export function serialize(writer: BinaryWriter, value: Card): void {
    Card.getTypeScriptAlgebraicType().serialize(writer, value);
  }

  export function deserialize(reader: BinaryReader): Card {
    return Card.getTypeScriptAlgebraicType().deserialize(reader);
  }

}


