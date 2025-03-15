import HeaderNav from "./header-nav";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="bg-primary text-white flex justify-between items-center">
      <Logo />
      <HeaderNav />
    </header>
  );
}
