import React, { useState } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { LoadingIndicator } from "./LoadingIndicator";
import { useReadDeck } from "../utils/hooks";
import { createCard } from "../utils/api";
import { useHistory } from "react-router-dom";
import CardForm from "./CardForm";
export function NewCardPage() {
  const [deck] = useReadDeck();
  const [card, setCard] = useState({ front: "", back: "" });
  const history = useHistory();

  if (!deck) {
    return <LoadingIndicator />;
  }
  async function addCard() {
    await createCard(deck.id, card);
    history.go(0);
  }

  const handleChange = (event) => {
    const { target } = event;
    setCard({ ...card, [target.id]: target.value });
  };

  return (
    <>
      <Breadcrumbs />
      <CardForm
        card={card}
        deckId={deck.id}
        changeForm={handleChange}
        submitForm={(event) => {
          event.preventDefault();
          addCard();
        }}
        deck={deck}
      />
    </>
  );
}
