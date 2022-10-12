import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "./Deck";
import { listDecks } from "../utils/api";
import { Route, Switch } from "react-router-dom";

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
        <Switch>
          <Route exact path="/">
            <div>
              <button>+ Create deck</button>
              {deckNames}
            </div>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
