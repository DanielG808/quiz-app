import Link from "next/link";
import H1 from "./H1";

export default function Logo() {
  return (
    <Link href="/" className="inline-block pl-10 py-4">
      <article className="w-fit">
        <H1 className="font-bold">QuizMo</H1>
        <h2 className="text-2xl pl-1">Quiz more with QuizMo.</h2>
      </article>
    </Link>
  );
}
