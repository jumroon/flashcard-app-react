import React from "react";
import { useReadDeck } from "../utils/hooks";
import { LoadingIndicator } from "./LoadingIndicator";

export function DeckPage() {
  const deck = useReadDeck();

  if (!deck) {
    return <LoadingIndicator />;
  }

  const cards = deck.cards;
  const cardFronts = cards.map((card, index) => {
    return (
      <form key={index} style={{ marginTop: 100 }}>
        <h2>{card.front}</h2>
        <h2>{card.back}</h2>
        <button>DELETE</button>
        <button>Edit</button>
      </form>
    );
  });

  return (
    <div>
      <h1>{deck.name}</h1>
      {/* may need to move deck description to a different component later*/}
      <h2>{deck.description}</h2>
      <div>
        <h2>{cardFronts}</h2>
      </div>
    </div>
  );
}
