import { headerNavLinks } from "@/lib/constants/headerNavLinks";
import NavLink from "./nav-link";

export default function HeaderNav() {
  return (
    <nav className="pr-32">
      {headerNavLinks.map(({ path, name }) => (
        <NavLink key={path} path={path} name={name} />
      ))}
    </nav>
  );
}
