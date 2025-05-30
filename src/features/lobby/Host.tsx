import { useConnectionFacade } from "@/spacetimedb/client/facades/useConnectionFacade";

function Host() {
  const { conn } = useConnectionFacade();

  const onClick = () => {
    if (conn) {
      console.log("serverLog being called");
      conn.reducers.serverLog(
        "*******************test logging********************"
      );
    }
  };
  return (
    <div>
      <button onClick={onClick}>Host game</button>
    </div>
  );
}

export { Host };
