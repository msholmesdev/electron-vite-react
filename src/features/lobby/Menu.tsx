import { useConnectionFacade } from "@/spacetimedb/client/facades/useConnectionFacade";
import { InitialLoading } from "../initialLoad/InitialLoading";
import { PageLink } from "@/components/PageLink";

function Menu() {
  const { connected } = useConnectionFacade();
  return (
    <div>
      {!connected && <InitialLoading />}
      <PageLink link="/host" name="Host a game" />
      <PageLink link="/lobby" name="Join a game" />
    </div>
  );
}
export { Menu };
