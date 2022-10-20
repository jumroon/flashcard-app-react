import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../api";

export const useReadDeck = () => {
  const [deck, setDeck] = useState();
  const { deckId } = useParams();

  useEffect(() => {
    async function getDeck() {
      const newDeck = await readDeck(deckId);
      setDeck(newDeck);
    }
    getDeck();
  }, [deckId]);

  return [deck, setDeck];
};
