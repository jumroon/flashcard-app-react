import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";

export function NewDeckPage() {
  return (
    <>
      <h1> Create Deck</h1>
      <h3>Name</h3>
      <input type="text"></input>
      <h3>Description</h3>
      <textarea></textarea>
    </>
  );
}
