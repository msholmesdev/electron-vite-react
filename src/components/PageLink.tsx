import { cn } from "@/utils/styles";
import { Link } from "react-router-dom";

type PageLinkProps = {
  link: "/menu" | "/host" | "/lobby" | "/game" | "/lobbies";
  name: string;
  size?: "sm" | "lg";
};

function PageLink({ link, name, size = "lg" }: PageLinkProps) {
  return (
    <div>
      <Link
        to={link}
        style={{ marginRight: "1rem" }}
        className={cn(
          "bg-amber-600 flex items-center justify-center border-2 border-amber-200",
          size === "lg" ? "w-40 h-20" : "w-20 h-12"
        )}
      >
        {name}
      </Link>
    </div>
  );
}

export { PageLink };
