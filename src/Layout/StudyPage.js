import React, { useState } from "react";
import { useReadDeck } from "../utils/hooks";
import { LoadingIndicator } from "./LoadingIndicator";

export function StudyPage() {
  const deck = useReadDeck();
  const [flipped, setFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  if (!deck) {
    return <LoadingIndicator />;
  }

  const cardWeWant = deck.cards[currentCardIndex];

  const isLastCard = currentCardIndex === deck.cards.length - 1;

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
      {!flipped && <button onClick={() => setFlipped(true)}>FLIP</button>}
      {flipped && !isLastCard && (
        <button
          onClick={() => {
            setCurrentCardIndex(currentCardIndex + 1);
            setFlipped(false);
          }}>
          next
        </button>
      )}
      {isLastCard && flipped && (
        <>
          <div>Do you want to restart the deck?</div>
          <button>Yes</button>
          <button>Return Home</button>
        </>
      )}
    </>
  );
}
