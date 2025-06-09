import { useConnectionFacade } from "@/spacetimedb/client/facades/useConnectionFacade";
import { InitialLoading } from "../initialLoad/InitialLoading";
import { PageLink } from "@/components/PageLink";
import { ReactNode } from "react";

function Menu() {
  const { connected } = useConnectionFacade();
  return (
    <div>
      {!connected && false && <InitialLoading />}
      <div className="flex flex-col items-center justify-center gap-20 bg-gray-800 h-screen w-screen">
        <PageLink link="/host" name="Host a game" />
        <PageLink link="/lobbies" name="Join a game" />
      </div>
    </div>
  );
}

const MenuCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-gray-800 w-full h-full border rounded-xl border-amber-500 flex flex-col items-center p-16 gap-4">
        {children}
      </div>
      <div className="w-full flex items-center justify-center">
        <PageLink link="/menu" name="Back" size="sm" />
      </div>
    </div>
  );
};

export { Menu, MenuCard };
