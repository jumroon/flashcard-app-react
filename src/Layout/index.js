import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "./Deck";

function Layout() {
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
