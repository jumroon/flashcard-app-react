import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

export function DeckForm({ deck }) {
  return (
    <form>
      <h2>Name</h2>
      <input type="text" id="name" value={deck.name}></input>
      <h2>Description</h2>
      <textarea id="description" value={deck.description}></textarea>
    </form>
  );
}
