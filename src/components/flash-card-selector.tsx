import { TFlashCard } from "@/lib/types/flashCardType";
import FlashCardChip from "./flash-card-chip";

type FlashCardSelectorProps = {
  flashcards: TFlashCard[];
  currentIndex: number;
};

export default function FlashCardSelector({
  flashcards,
  currentIndex,
}: FlashCardSelectorProps) {
  return (
    <aside className="border border-primary/25 bg-background flex space-x-2 rounded-md max-w-[600px] overflow-hidden shadow-sm">
      <div className="flex overflow-x-scroll scrollbar scrollbar-thumb-primary/45 scrollbar-thumb-rounded-md scrollbar-hover:bg-primary/65">
        {flashcards.map((flashcard) => (
          <FlashCardChip
            key={flashcard.index}
            flashcard={flashcard}
            className={
              flashcard.index === currentIndex
                ? "border-0 ring-2 ring-primary"
                : null
            }
          />
        ))}
      </div>
    </aside>
  );
}
