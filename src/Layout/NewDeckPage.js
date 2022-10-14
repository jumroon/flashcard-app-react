import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import { DeckForm } from "./DeckForm";

export function NewDeckPage() {
  return (
    <>
      <h1> Create Deck</h1>
      <DeckForm deck={{}} />
    </>
  );
}
