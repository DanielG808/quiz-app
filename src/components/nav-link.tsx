import Link from "next/link";

type NavLinkProps = {
  path: string;
  name: string;
};

export default function NavLink({ path, name }: NavLinkProps) {
  return (
    <Link href={path} className="text-xl">
      {name}
    </Link>
  );
}
