import React from "react";
import { useReadDeck } from "../utils/hooks";
import { DeckForm } from "./DeckForm";
import { LoadingIndicator } from "./LoadingIndicator";
import { useHistory } from "react-router-dom";
import { updateDeck } from "../utils/api";

export function DeckEditPage() {
  const history = useHistory();
  const [deck, setDeck] = useReadDeck();

  if (!deck) {
    return <LoadingIndicator />;
  }

  function returnToDeckPage() {
    history.push(`/decks/${deck.id}`);
  }

  async function onSubmit() {
    await updateDeck(deck);
    returnToDeckPage();
  }

  const handleChange = (event) => {
    const { target } = event;
    setDeck({ ...deck, [target.id]: target.value });
  };

  return (
    <DeckForm
      deck={deck}
      onCancel={returnToDeckPage}
      onSubmit={onSubmit}
      handleChange={handleChange}
    />
  );
}
