import FlashCardChip from "./flash-card-chip";

export default function FlashCardSelector({ flashcards, selectedFlashCard }) {
  return (
    <aside className="bg-background flex space-x-2">
      {flashcards.map(({ index, front, back }) => (
        <FlashCardChip
          key={index}
          className={
            selectedFlashCard === index ? "ring-2 ring-primary border-0" : null
          }
        />
      ))}
    </aside>
  );
}
