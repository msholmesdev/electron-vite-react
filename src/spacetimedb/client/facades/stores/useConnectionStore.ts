import { create } from "zustand";
import { Identity } from "@clockworklabs/spacetimedb-sdk";
import { DbConnection } from "../../module_bindings";

type ConnectionState = {
  conn: DbConnection | null;
  connected: boolean;
  identity: Identity | null;
  setConnection: (conn: DbConnection | null) => void;
  setConnected: (connected: boolean) => void;
  setIdentity: (identity: Identity | null) => void;
};

export const useConnectionStore = create<ConnectionState>((set) => ({
  conn: null,
  connected: false,
  identity: null,
  setConnection: (conn) => set({ conn }),
  setConnected: (connected) => set({ connected }),
  setIdentity: (identity) => set({ identity }),
}));
