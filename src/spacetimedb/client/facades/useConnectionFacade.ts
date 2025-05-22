import { useConnectionStore } from "./stores/useConnectionStore";

export function useConnectionFacade() {
  const conn = useConnectionStore((s) => s.conn);
  const connected = useConnectionStore((s) => s.connected);
  const identity = useConnectionStore((s) => s.identity);

  const setConnection = useConnectionStore((s) => s.setConnection);
  const setConnected = useConnectionStore((s) => s.setConnected);
  const setIdentity = useConnectionStore((s) => s.setIdentity);

  return {
    conn,
    connected,
    identity,
    setConnection,
    setConnected,
    setIdentity,
    isUserReady: conn !== null && connected === true && identity !== null,
  };
}
