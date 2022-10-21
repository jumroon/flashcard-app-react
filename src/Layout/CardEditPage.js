import React, { useEffect, useState } from "react";
import { useReadDeck } from "../utils/hooks";
import { LoadingIndicator } from "./LoadingIndicator";
import { useParams, useHistory } from "react-router-dom";
import { updateCard } from "../utils/api";
import CardForm from "./CardForm";

export function CardEditPage() {
  const { cardId } = useParams();
  const [deck] = useReadDeck();
  const [card, setCard] = useState();
  const history = useHistory();

  useEffect(() => {
    if (deck) {
      const cardWeWant = deck.cards.find((card) => `${card.id}` === cardId);
      setCard(cardWeWant);
    }
  }, [deck, cardId]);

  if (!deck || !card) {
    return <LoadingIndicator />;
  }

  async function onSubmit(event) {
    event.preventDefault();
    await updateCard(card);
    history.push(`/decks/${deck.id}`);
  }

  const handleChange = (event) => {
    const { target } = event;
    setCard({ ...card, [target.id]: target.value });
  };

  return (
    <>
      <CardForm
        card={card}
        deck={deck}
        deckId={deck.id}
        submitForm={onSubmit}
        changeForm={handleChange}
      />
    </>
  );
}
