import { cn } from "@/utils/styles";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gray-900 h-screen w-screen text-gray-200 text-xl",
        className
      )}
    >
      <div>{children}</div>
    </div>
  );
};

export { Container };
