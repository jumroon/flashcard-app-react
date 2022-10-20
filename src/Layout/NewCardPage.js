import React, { useState } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { LoadingIndicator } from "./LoadingIndicator";
import { useReadDeck } from "../utils/hooks";
import { createCard } from "../utils/api";
import { useHistory, Link } from "react-router-dom";
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

      <h1>I am a happy card page lol</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addCard();
        }}>
        <h2>{deck.name}</h2>

        <h3>front</h3>
        <textarea
          id="front"
          value={card.front}
          onChange={handleChange}></textarea>
        <h3>back</h3>
        <textarea
          id="back"
          value={card.back}
          onChange={handleChange}></textarea>
        <button>Save</button>
        <Link to={`/decks/${deck.id}`}>
          <button>Done</button>
        </Link>
      </form>
    </>
  );
}
