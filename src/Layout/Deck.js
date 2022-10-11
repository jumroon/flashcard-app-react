import React from "react";

export default function Deck({ deckName, listOfCards }) {
  return (
    <>
      <h1>{deckName}</h1>
      <h2>{listOfCards.length} cards</h2>
    </>
  );
}
