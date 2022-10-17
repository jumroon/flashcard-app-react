import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Deck from "./Deck";
import { listDecks } from "../utils/api";
import { StudyPage } from "./StudyPage";

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
    <>
      <Deck deckName={deck.name} listOfCards={deck.cards} key={index} />
      <Link to={`/decks/${index + 1}/study`}>Study</Link>
    </>
  ));

  return (
    <>
      <button>+ Create deck</button>
      {deckNames}
    </>
  );
}
