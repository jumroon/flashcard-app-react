import React from "react";
import { useReadDeck } from "../utils/hooks";
import { DeckForm } from "./DeckForm";
import { LoadingIndicator } from "./LoadingIndicator";
import { useHistory } from "react-router-dom";

export function DeckEditPage() {
  const history = useHistory();
  const deck = useReadDeck();

  if (!deck) {
    return <LoadingIndicator />;
  }

  console.log(deck.id);
  function onCancel() {
    history.push(`/decks/${deck.id}`);
  }

  return <DeckForm deck={deck} onCancel={onCancel} />;
}
