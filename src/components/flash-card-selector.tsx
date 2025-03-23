import FlashCardChip from "./flash-card-chip";

export default function FlashCardSelector() {
  return (
    <aside className="bg-background flex space-x-2">
      <FlashCardChip />
      <FlashCardChip />
      <FlashCardChip />
    </aside>
  );
}
