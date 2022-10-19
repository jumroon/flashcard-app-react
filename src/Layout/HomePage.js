import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useReadDeck } from "../utils/hooks";
import Deck from "./Deck";
import { listDecks, deleteDeck, updateDeck } from "../utils/api";
import { StudyPage } from "./StudyPage";
import { LoadingIndicator } from "./LoadingIndicator";

export function HomePage() {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function callListOfDecks() {
      const listOfDecks = await listDecks();
      setDecks(listOfDecks);
    }
    callListOfDecks();
  }, []);

  const deleteHandler = async (deckId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this deck? You will not be able to recover it."
      )
    ) {
      await deleteDeck(deckId);
      history.go(0);
    } else {
      history.go(0);
    }
  };

  const deckNames = decks.map((deck, index) => (
    <>
      <Deck deckName={deck.name} listOfCards={deck.cards} key={index} />
      <Link to={`/decks/${index + 1}/study`}>
        <button>Study</button>
      </Link>

      <Link to={`/decks/${index + 1}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => deleteHandler(deck.id)}>Delete1111</button>
    </>
  ));

  return (
    <>
      <Link to={"/decks/new"}>
        <button>+ Create deck</button>
      </Link>

      {deckNames}
    </>
  );
}
