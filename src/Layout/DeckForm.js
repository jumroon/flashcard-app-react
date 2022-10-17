import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

export function DeckForm({ deck, onSubmit, handleChange, onCancel }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}>
      <h2>Name</h2>
      <input
        type="text"
        id="name"
        value={deck.name}
        onChange={handleChange}></input>
      <h2>Description</h2>
      <textarea
        id="description"
        value={deck.description}
        onChange={handleChange}></textarea>
      <button onClick={onCancel}>Cancel</button>
      <button>Submit</button>
    </form>
  );
}
