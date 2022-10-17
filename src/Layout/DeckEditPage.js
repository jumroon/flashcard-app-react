import React from "react";
import { useReadDeck } from "../utils/hooks";
import { DeckForm } from "./DeckForm";
import { LoadingIndicator } from "./LoadingIndicator";
import { useHistory } from "react-router-dom";
import { updateDeck } from "../utils/api";

export function DeckEditPage() {
  const history = useHistory();
  const deck = useReadDeck();

  if (!deck) {
    return <LoadingIndicator />;
  }

  function returnToDeckPage() {
    history.push(`/decks/${deck.id}`);
  }

  async function onSubmit(event) {
    const updatedDeck = await updateDeck(deck);
    returnToDeckPage();
  }

  return (
    <DeckForm deck={deck} onCancel={returnToDeckPage} onSubmit={onSubmit} />
  );
}
