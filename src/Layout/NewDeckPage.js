import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import { DeckForm } from "./DeckForm";

export function NewDeckPage() {
  const [deck, setDeck] = useState({
    name: "",
    description: "",
  });
  const history = useHistory();

  async function onSubmit() {
    const createdDeck = await createDeck(deck);
    history.push(`/decks/${createdDeck.id}`);
  }

  function onCancel() {
    history.push(`/`);
  }

  const handleChange = (event) => {
    const { target } = event;
    setDeck({ ...deck, [target.id]: target.value });
  };

  return (
    <>
      <h1> Create Deck</h1>
      <DeckForm
        deck={deck}
        onSubmit={onSubmit}
        handleChange={handleChange}
        onCancel={onCancel}
      />
    </>
  );
}
