import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";

import { Route, Switch } from "react-router-dom";
import { HomePage } from "./HomePage";
import { CardsPage } from "./CardsPage";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/decks/:deckId">
            <CardsPage />
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
