import { cn } from "@/lib/utils/cn";

export default function FlashCardChip({ flashcard, className }) {
  return (
    <article
      className={cn(
        "bg-white border-1 border-black/45 flex-shrink-0 min-w-28 h-20 my-3 mx-2",
        className
      )}
    ></article>
  );
}
