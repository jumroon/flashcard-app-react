import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import { Breadcrumbs } from "./Breadcrumbs";
import { LoadingIndicator } from "./LoadingIndicator";

export function NewCardPage() {
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
    return <LoadingIndicator />;
  }

  return (
    <>
      <Breadcrumbs />
      <h1>I am a happy card page lol</h1>
      <h3>{deck.name}</h3>

      <h3>front</h3>
      <textarea></textarea>
      <h3>back</h3>
      <textarea></textarea>
      <button>Save</button>
    </>
  );
}
