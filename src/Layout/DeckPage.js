import React from "react";
import { useReadDeck } from "../utils/hooks";
import { LoadingIndicator } from "./LoadingIndicator";
import { Link } from "react-router-dom";

export function DeckPage() {
  const [deck] = useReadDeck();

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
        <Link to={`/decks/${deck.id}/cards/${index + 1}/edit`}>
          <button>Edit</button>
        </Link>
      </form>
    );
  });

  return (
    <div>
      <h1>{deck.name}</h1>
      <h2>{deck.description}</h2>
      <button>DELETE</button>
      <button>Edit</button>
      <button>Study</button>
      <button>+ Add Cards</button>
      <div>
        <h2>{cardFronts}</h2>
      </div>
    </div>
  );
}
