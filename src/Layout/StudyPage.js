import React, { useState } from "react";
import { useReadDeck } from "../utils/hooks";
import { LoadingIndicator } from "./LoadingIndicator";

export function StudyPage() {
  const deck = useReadDeck();
  const [flipped, setFlipped] = useState(false);
  const currentCardIndex = 0;

  if (!deck) {
    return <LoadingIndicator />;
  }

  const cardWeWant = deck.cards[currentCardIndex];

  return (
    <>
      <h1>
        <span>Study: </span>
        <span>{deck.name}</span>
      </h1>
      <h2>
        Card {currentCardIndex + 1} of {deck.cards.length}
      </h2>
      <div>{flipped ? cardWeWant.back : cardWeWant.front}</div>
      <button onClick={() => setFlipped(true)}>FLIP</button>
    </>
  );
}
