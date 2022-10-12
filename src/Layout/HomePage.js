import React, { useEffect, useState } from "react";

import Deck from "./Deck";
import { listDecks } from "../utils/api";

export function HomePage() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function callListOfDecks() {
      const listOfDecks = await listDecks();
      setDecks(listOfDecks);
    }
    callListOfDecks();
  }, []);

  const deckNames = decks.map((deck, index) => (
    <Deck deckName={deck.name} listOfCards={deck.cards} key={index} />
  ));

  return (
    <>
      <button>+ Create deck</button>
      {deckNames}
    </>
  );
}
