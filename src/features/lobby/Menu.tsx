import { useConnectionFacade } from "@/spacetimedb/client/facades/useConnectionFacade";
import { InitialLoading } from "../initialLoad/InitialLoading";
import { PageLink } from "@/components/PageLink";

function Menu() {
  const { connected } = useConnectionFacade();
  return (
    <div>
      {!connected && false && <InitialLoading />}
      <div className="flex flex-col items-center justify-center gap-20 bg-gray-800 h-screen w-screen">
        <PageLink link="/host" name="Host a game" />
        <PageLink link="/lobby" name="Join a game" />
      </div>
    </div>
  );
}
export { Menu };
