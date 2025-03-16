import { quizTypes } from "@/lib/constants/quizTypes";
import RadioButton from "./ui/radio-button";
import { useState } from "react";

export default function TypeSelector() {
  const [selectedType, setSelectedType] = useState<string | null>("Flashcard");

  return (
    <div className="py-3 flex flex-col">
      <label htmlFor="">Quiz Type:</label>
      <div className="flex items-center pt-2">
        {quizTypes.map((type) => (
          <RadioButton
            key={type}
            type={type}
            checked={selectedType === type}
            onChange={() => setSelectedType(type)}
          />
        ))}
      </div>
    </div>
  );
}
