import { Overlay } from "@/components/Overlay";
import { useGameFacade } from "@/spacetimedb/client/facades/useGameFacade";
import { useLobbyFacade } from "@/spacetimedb/client/facades/useLobbyFacade";

const ChooseTurnOption = () => {
  const { isTurn } = useGameFacade();
  const { connectedLobby } = useLobbyFacade();

  const Manage = () => {
    console.log("manage");
  };

  const Hire = () => {
    console.log("hire");
  };

  const Interview = () => {
    console.log("interview");
  };

  return (
    <Overlay
      shouldShow={
        isTurn &&
        (connectedLobby?.turnType === undefined ||
          connectedLobby?.turnType === null)
      }
    >
      <div className="flex flex-row gap-6">
        <TurnOption
          title="Manage"
          text="put all [employees] in your [company] to [work]"
          callback={Manage}
        />
        <TurnOption
          title="Hire"
          text="[Hire] 3 [employees] into your [resume] from the [unemployed]"
          callback={Hire}
        />
        <TurnOption
          title="Interview"
          text="[employ] 2 [employees] from your [resume] into your [company]"
          callback={Interview}
        />
      </div>
    </Overlay>
  );
};

const TurnOption = ({
  title,
  text,
  callback,
}: {
  title: string;
  text: string;
  callback: () => void;
}) => {
  return (
    <button
      onClick={callback}
      className="w-80 h-120 flex flex-col justify-between bg-amber-100 border-r-amber-200 rounded-2xl"
    >
      <div className="text-3xl">{title}</div>
      <div>IMG HERE</div>
      <div className="text-xl">{text}</div>
    </button>
  );
};

export { ChooseTurnOption };
