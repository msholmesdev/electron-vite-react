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
        "w-full h-full flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export { Container };
