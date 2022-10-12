import userEvent from "@testing-library/user-event";
import React from "react";
import { useParams } from "react-router-dom";

export function CardsPage() {
  const { deckId } = useParams();
  console.log("FRIENDLY PARAMS", deckId);

  return <div>I am the cards page lmao</div>;
}
