import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";

import { Route, Switch } from "react-router-dom";
import { HomePage } from "./HomePage";
import { DeckPage } from "./DeckPage";
import { NewDeckPage } from "./NewDeckPage";
import { DeckEditPage } from "./DeckEditPage";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/decks/new">
            <NewDeckPage />
          </Route>
          <Route path="/decks/:deckId/edit">
            <DeckEditPage />
          </Route>
          <Route path="/decks/:deckId">
            <DeckPage />
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
