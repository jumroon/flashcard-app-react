import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateDeck, readDeck, createDeck } from "../utils/api";
import { DeckForm } from "./DeckForm";
import { LoadingIndicator } from "./LoadingIndicator";

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
    return <LoadingIndicator />;
  }

  return <DeckForm deck={deck} />;
}
