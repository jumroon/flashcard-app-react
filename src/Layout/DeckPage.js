import React from "react";
import { useReadDeck } from "../utils/hooks";
import { LoadingIndicator } from "./LoadingIndicator";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck, deleteCard } from "../utils/api";

export function DeckPage() {
  const [deck] = useReadDeck();
  const history = useHistory();

  if (!deck) {
    return <LoadingIndicator />;
  }
  const deleteDeckHandler = async (deckId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this deck? You will not be able to recover it."
      )
    ) {
      await deleteDeck(deckId);
      history.go(0);
    } else {
      history.go(0);
    }
  };

  const deleteCardHandler = async (cardId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this card? You will not be able to recover it."
      )
    ) {
      await deleteCard(cardId);
      history.go(0);
    } else {
      history.go(0);
    }
  };

  const cards = deck.cards;
  const cardFronts = cards.map((card, index) => {
    return (
      <form key={index} style={{ marginTop: 100 }}>
        <h2>{card.front}</h2>
        <h2>{card.back}</h2>
        <button onClick={() => deleteCardHandler(card.id)}>DELETE</button>
        <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>
          <button>Edit</button>
        </Link>
      </form>
    );
  });

  return (
    <div>
      <h1>{deck.name}</h1>
      <h2>{deck.description}</h2>
      <button onClick={() => deleteDeckHandler(deck.id)}>DELETE</button>
      <Link to={`/decks/${deck.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button>Study</button>
      <button>+ Add Cards</button>
      <div>
        <h2>{cardFronts}</h2>
      </div>
    </div>
  );
}
