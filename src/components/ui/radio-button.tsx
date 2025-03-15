type RadioButtonProps = {
  type: "Flashcard" | "Multiple Choice";
};

export default function RadioButton({ type }: RadioButtonProps) {
  return (
    <label className="inline-flex items-center space-x-2 cursor-pointer px-2">
      <input type="radio" className="hidden peer" />
      <span className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-primary peer-checked:bg-primary/45 transition-all duration-200" />
      <span className="text-sm">{type}</span>
    </label>
  );
}
