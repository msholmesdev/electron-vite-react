import { Identity } from "@clockworklabs/spacetimedb-sdk";
import { useEffect, useState } from "react";
import { DbConnection, ErrorContext } from "../module_bindings";

function useConnect() {
  const [connected, setConnected] = useState<boolean>(false);
  const [identity, setIdentity] = useState<Identity | null>(null);
  const [conn, setConn] = useState<DbConnection | null>(null);

  useEffect(() => {
    const subscribeToQueries = (conn: DbConnection, queries: string[]) => {
      conn
        ?.subscriptionBuilder()
        .onApplied(() => {
          // return on this to try blocking issues
          console.log("SDK client cache initialized.");
        })
        .subscribe(queries);
    };

    const onConnect = (
      conn: DbConnection,
      identity: Identity,
      token: string
    ) => {
      setIdentity(identity);
      setConnected(true);
      sessionStorage.setItem("auth_token", token);
      console.log(
        "Connected to SpacetimeDB with identity:",
        identity.toHexString()
      );

      subscribeToQueries(conn, [
        "SELECT * FROM lobby",
        "SELECT * FROM lobby_secret",
        "SELECT * FROM game",
        "SELECT * FROM game_secret",
        "SELECT * FROM card",
        "SELECT * FROM guild",
      ]);
    };

    const onDisconnect = () => {
      console.log("Disconnected from SpacetimeDB");
      setConnected(false);
    };

    const onConnectError = (_ctx: ErrorContext, err: Error) => {
      console.log("Error connecting to SpacetimeDB:", err);
    };

    const token = sessionStorage.getItem("auth_token");

    setConn(
      DbConnection.builder()
        .withUri("ws://localhost:3000")
        .withModuleName("guild-wars")
        .withToken(token ?? "")
        .onConnect(onConnect)
        .onDisconnect(onDisconnect)
        .onConnectError(onConnectError)
        .build()
    );
  }, []);

  return { conn, connected, identity };
}

export { useConnect };
