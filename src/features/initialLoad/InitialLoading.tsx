import { Loading } from "@/components/Loading";
import { useConnectionFacade } from "@/spacetimedb/client/facades/useConnectionFacade";
import { DbConnection } from "@/spacetimedb/client/module_bindings";

const InitialLoading = () => {
  const { connected, conn } = useConnectionFacade();

  return (
    <div className="flex flex-col gap-4">
      <div>{conn ? <EstablishedConfigDb conn={conn} /> : <Loading />}</div>
      {connected ? (
        <div className="font-bold">Established connection with DB</div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

const EstablishedConfigDb = ({ conn }: { conn: DbConnection }) => {
  const identity = String(conn.identity?.data);
  const connectionId = String(conn.connectionId.data);
  const isActive = String(conn.isActive);
  const token = String(conn.token);
  return (
    <div>
      <div className="font-bold">Established DB config:</div>
      <ConfigRow name="identity" value={identity} />
      <ConfigRow name="connectionId" value={connectionId} />
      <ConfigRow name="isActive" value={isActive} />
      <ConfigRow name="token" value={token} />
    </div>
  );
};

const ConfigRow = ({ name, value }: { name: string; value: string }) => {
  const convertedValue = value as string;
  return (
    <div className="flex gap-3 max-w-[500px]">
      <div className="w-25 font-medium">{name}:</div>
      <div className="break-all w-[400px]">
        {convertedValue ? convertedValue : "N/A"}
      </div>
    </div>
  );
};

export { InitialLoading };
