import React, { useEffect, useState } from "react";
import { useReadDeck } from "../utils/hooks";
import { LoadingIndicator } from "./LoadingIndicator";
import { useParams, Link, useHistory } from "react-router-dom";
import { updateCard } from "../utils/api";

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
      <form onSubmit={(event) => onSubmit(event)}>
        <h1>Edit Card</h1>
        <h3>Front</h3>
        <textarea
          id="front"
          value={card.front}
          onChange={handleChange}></textarea>
        <h3>Back</h3>
        <textarea
          id="back"
          value={card.back}
          onChange={handleChange}></textarea>
        <Link to={`/decks/${deck.id}`}>
          <button>Cancel</button>
        </Link>
        <button>Submit</button>
      </form>
    </>
  );
}
