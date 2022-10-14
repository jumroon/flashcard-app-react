import React from "react";
import { useReadDeck } from "../utils/hooks";
import { DeckForm } from "./DeckForm";
import { LoadingIndicator } from "./LoadingIndicator";

export function DeckEditPage() {
  const deck = useReadDeck();

  if (!deck) {
    return <LoadingIndicator />;
  }

  return <DeckForm deck={deck} />;
}
