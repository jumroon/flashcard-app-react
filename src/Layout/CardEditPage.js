import React from "react";
import { useReadDeck } from "../utils/hooks";
import { LoadingIndicator } from "./LoadingIndicator";
import { useParams } from "react-router-dom";

export function CardEditPage() {
  const { cardId } = useParams();

  const deck = useReadDeck();

  if (!deck) {
    return <LoadingIndicator />;
  }

  console.log(cardId);
  const cardWeWant = deck.cards.find((card) => card.id == cardId);
  console.log(cardWeWant);

  return <div> super happy fun card editing </div>;
}
