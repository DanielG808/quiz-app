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
    <aside className="border border-primary/25 bg-background flex space-x-2 transition-all duration-200 rounded-md max-w-[600px] overflow-hidden">
      <div className="flex overflow-x-scroll">
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
