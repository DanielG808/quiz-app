"use client";

import { useState } from "react";
import CardNavigator from "./card-navigator";
import FlashCardCreator from "./flash-card-creator";
import FlashCardSelector from "./flash-card-selector";

const flashcards = [
  { index: 0, front: "Card 1 Front", back: "Card 1 Back" },
  { index: 1, front: "Card 2 Front", back: "Card 2 Back" },
  { index: 2, front: "Card 3 Front", back: "Card 3 Back" },
];

export default function FlashCardQuiz() {
  return (
    <section className="border-1 border-primary/25 bg-primary/15 rounded-md m-20 shadow-lg p-10 space-y-4">
      <FlashCardSelector />
      <FlashCardCreator />
    </section>
  );
}
