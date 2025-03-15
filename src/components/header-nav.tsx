import NavLink from "./nav-link";

export default function HeaderNav() {
  return (
    <nav className="pr-32">
      <NavLink path="/user/quizes" name="Quizes" />
    </nav>
  );
}
