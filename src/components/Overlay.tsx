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
    <div className="h-screen w-screen flex items-center justify-center bg-amber-200/5">
      {children}
    </div>
  );
};

export { Overlay };
