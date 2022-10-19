import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { LoadingIndicator } from "./LoadingIndicator";
import { useReadDeck } from "../utils/hooks";
import CardForm from "./CardForm__TEMPLATE";

export function NewCardPage() {
  const [deck] = useReadDeck();

  if (!deck) {
    return <LoadingIndicator />;
  }

  return (
    <>
      <Breadcrumbs />

      <h1>I am a happy card page lol</h1>
      <h3>{deck.name}</h3>

      <h3>front</h3>
      <textarea></textarea>
      <h3>back</h3>
      <textarea></textarea>
      <button>Save</button>
    </>
  );
}
