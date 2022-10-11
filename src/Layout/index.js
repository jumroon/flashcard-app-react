import React, { useEffect, useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "./Deck";
import { listDecks } from "../utils/api";

function Layout() {
  const [decks, setDecks] = useState();

  useEffect(() => {
    async function callListOfDecks() {
      const listOfDecks = await listDecks();
      setDecks(listOfDecks);
    }
    callListOfDecks();
  }, []);

  console.log(decks);

  return (
    <>
      <Header />
      <div className="container">
        <button>+ Create deck</button>
        <Deck />
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
