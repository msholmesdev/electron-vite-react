import { ReactNode } from "react";

const Overlay = ({
  children,
  shouldShow,
}: {
  children: ReactNode;
  shouldShow: boolean;
}) => {
  if (!shouldShow) {
    return;
  }
  return (
    <div className="h-full w-full flex items-center justify-center bg-amber-200/5">
      {children}
    </div>
  );
};

export { Overlay };
