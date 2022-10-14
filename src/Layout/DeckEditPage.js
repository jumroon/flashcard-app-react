import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateDeck } from "../utils/api";

export function DeckEditPage() {
  const [deck, setDeck] = useState();
  const { deckId } = useParams();

  useEffect(() => {
    async function getDeck() {
      const deckWeWant = await updateDeck(deckId);
      setDeck(deckWeWant);
    }
    getDeck();
  }, []);

  return (
    <>
      <h1>Welcome to the deck editing page lol</h1>
      <h2>Name</h2>
      <input type="text"></input>
      <h2>Description</h2>
      <input type="textArea"></input>
    </>
  );
}
