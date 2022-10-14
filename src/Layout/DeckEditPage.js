import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

export function DeckEditPage() {
  const [deck, setDeck] = useState();
  const { deckId } = useParams();

  useEffect(() => {
    async function getDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
    }
    getDeck();
  }, []);

  if (!deck) {
    return <div>LOADING...</div>;
  }

  return (
    <div>
      <h2>Name</h2>
      <input type="text" id="name"></input>
      <h2>Description</h2>
      <textarea id="description"></textarea>
    </div>
  );
}
