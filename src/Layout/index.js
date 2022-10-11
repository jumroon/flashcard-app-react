import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "./Deck";
import { listDecks } from "../utils/api";

function Layout() {
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
      <Header />
      <div className="container">
        <button>+ Create deck</button>
        {deckNames}
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
