"use client";

import { useState } from "react";
import CardNavigator from "./card-navigator";
import FlashCardCreator from "./flash-card-creator";

export default function FlashCardQuiz() {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  return (
    <section className="border-1 border-primary/25 bg-primary/15 rounded-md m-20 shadow-lg p-10">
      <FlashCardCreator flipped={flipped} />
      <CardNavigator handleFlip={handleFlip} />
    </section>
  );
}
