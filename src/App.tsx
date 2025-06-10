import { useEffect } from "react";
import { useConnect } from "./spacetimedb/client/hooks/useConnect";
import { useConnectionFacade } from "./spacetimedb/client/facades/useConnectionFacade";
import { Container } from "./components/Container";
import { Menu } from "./features/lobby/Menu";
import { Host } from "./features/lobby/Host";
import { Lobbies } from "./features/lobby/Lobbies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGame } from "./spacetimedb/client/hooks/useGame";
import { useLobby } from "./spacetimedb/client/hooks/useLobby";
import { Lobby } from "./features/lobby/Lobby";
import { Game } from "./features/game/Game";
import { useCard } from "./spacetimedb/client/hooks/useCard";

function App() {
  const { conn, connected, identity } = useConnect();
  const { setConnection, setConnected, setIdentity } = useConnectionFacade();
  useGame();
  useLobby();
  useCard();

  useEffect(() => {
    setConnection(conn);
    setConnected(connected);
    setIdentity(identity);
  }, [conn, connected, identity]);

  return (
    <Container className="h-screen">
      <Router>
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/host" element={<Host />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/lobbies" element={<Lobbies />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<Menu />} /> {/* Default fallback */}
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
