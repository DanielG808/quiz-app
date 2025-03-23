import { cn } from "@/lib/utils/cn";

export default function FlashCardChip({ className }) {
  return (
    <article
      className={cn(
        "bg-white border-1 border-black/45 w-28 h-20 my-3 mx-2",
        className
      )}
    ></article>
  );
}
