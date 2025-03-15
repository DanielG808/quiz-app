import RadioButton from "./ui/radio-button";

export default function TypeSelector() {
  return (
    <div className="py-3 flex flex-col">
      <label htmlFor="">Quiz Type:</label>
      <div className="flex items-center pt-2">
        <RadioButton type="Flashcard" />
        <RadioButton type="Multiple Choice" />
      </div>
    </div>
  );
}
