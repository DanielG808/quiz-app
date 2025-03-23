import FlashCardChip from "./flash-card-chip";

export default function FlashCardSelector({ flashcards, currentIndex }) {
  return (
    <aside className="bg-background flex space-x-2 transition-all duration-200">
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
    </aside>
  );
}
