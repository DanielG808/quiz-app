"use client";

import { useState } from "react";
import FlashCardCreator from "./flash-card-creator";
import FlashCardSelector from "./flash-card-selector";

const flashcards = [
  { index: 0, front: "Card 1 Front", back: "Card 1 Back" },
  { index: 1, front: "Card 2 Front", back: "Card 2 Back" },
  { index: 2, front: "Card 3 Front", back: "Card 3 Back" },
  { index: 0, front: "Card 1 Front", back: "Card 1 Back" },
  { index: 1, front: "Card 2 Front", back: "Card 2 Back" },
  { index: 2, front: "Card 3 Front", back: "Card 3 Back" },
  { index: 0, front: "Card 1 Front", back: "Card 1 Back" },
  { index: 1, front: "Card 2 Front", back: "Card 2 Back" },
  { index: 2, front: "Card 3 Front", back: "Card 3 Back" },
];

export default function FlashCardQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? flashcards.length - 1 : prev - 1));
  };

  return (
    <section className="border-1 border-primary/25 bg-primary/15 rounded-md m-20 shadow-lg p-10 space-y-4">
      <FlashCardSelector flashcards={flashcards} currentIndex={currentIndex} />
      <FlashCardCreator
        flashcards={flashcards}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </section>
  );
}
