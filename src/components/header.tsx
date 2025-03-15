import HeaderNav from "./header-nav";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <Logo />
      <HeaderNav />
    </header>
  );
}
