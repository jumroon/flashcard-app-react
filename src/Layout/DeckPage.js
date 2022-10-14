import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

export function DeckPage() {
  const [deck, setDeck] = useState();
  const { deckId } = useParams();

  useEffect(() => {
    async function getDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
      console.log(newDeck);
    }
    getDeck();
  }, []);

  if (!deck) {
    return <div>LOADING...</div>;
  }

  const cards = deck.cards;
  const cardFronts = cards.map((card, index) => {
    console.log("CARD LABEL", card);
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
