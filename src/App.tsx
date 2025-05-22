import { useEffect } from "react";
import { useConnect } from "./spacetimedb/client/hooks/useConnect";
import { useConnectionFacade } from "./spacetimedb/client/facades/useConnectionFacade";
import { InitialLoading } from "./features/initialLoad/InitialLoading";
import { Container } from "./components/Container";

function App() {
  const { conn, connected, identity } = useConnect();
  const { setConnection, setConnected, setIdentity } = useConnectionFacade();

  useEffect(() => {
    setConnection(conn);
    setConnected(connected);
    setIdentity(identity);
  }, [conn, connected, identity]);

  return (
    <Container className="h-screen">
      <InitialLoading />
    </Container>
  );
}

export default App;
