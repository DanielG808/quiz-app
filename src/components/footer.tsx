import CopyrightStatement from "./copyright-statement";

export default function Footer() {
  return (
    <footer className="bg-primary/15 text-black/45 flex flex-col items-center py-4">
      <CopyrightStatement />
    </footer>
  );
}
