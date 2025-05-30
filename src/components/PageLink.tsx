import { Link } from "react-router-dom";

type PageLinkProps = {
  link: "/menu" | "/host" | "/lobby" | "/game";
  name: string;
};

function PageLink({ link, name }: PageLinkProps) {
  return (
    <Link to={link} style={{ marginRight: "1rem" }}>
      {name}
    </Link>
  );
}

export { PageLink };
