import { Link } from "react-router-dom";

type PageLinkProps = {
  link: "/menu" | "/host" | "/lobby" | "/game";
  name: string;
};

function PageLink({ link, name }: PageLinkProps) {
  return (
    <div className="w-30 h-12">
      <Link
        to={link}
        style={{ marginRight: "1rem" }}
        className="bg-amber-600 w-40 h-20 flex items-center justify-center border-2 border-amber-200"
      >
        {name}
      </Link>
    </div>
  );
}

export { PageLink };
