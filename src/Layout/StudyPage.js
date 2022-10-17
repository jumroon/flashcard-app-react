import React, { useState } from "react";
import { useReadDeck } from "../utils/hooks";
import { LoadingIndicator } from "./LoadingIndicator";
import { Link } from "react-router-dom";

export function StudyPage() {
  const [deck] = useReadDeck();
  const [flipped, setFlipped] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  if (!deck) {
    return <LoadingIndicator />;
  }

  if (deck.cards.length < 2) {
    return (
      <>
        <h1>{deck.name}</h1>
        <div>Not enough cards</div>
      </>
    );
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
          <button
            onClick={() => {
              setCurrentCardIndex(0);
              setFlipped(false);
            }}>
            Yes
          </button>
          <Link to="/">
            <button>Return Home</button>
          </Link>
        </>
      )}
    </>
  );
}
