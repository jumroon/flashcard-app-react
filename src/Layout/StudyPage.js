import React from "react";
import { useReadDeck } from "../utils/hooks";
import { LoadingIndicator } from "./LoadingIndicator";

export function StudyPage() {
  const deck = useReadDeck();
  const currentCardIndex = 0;

  if (!deck) {
    return <LoadingIndicator />;
  }

  console.log(deck.cards.length);

  const cardWeWant = deck.cards[currentCardIndex];

  return (
    <>
      <h1>Study: {deck.name}</h1>
      <h2>
        Card {currentCardIndex + 1} of {deck.cards.length}
      </h2>
      <div>{cardWeWant.front}</div>
    </>
  );
}
