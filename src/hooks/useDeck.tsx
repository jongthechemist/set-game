import { useState } from "react";
import shuffle from 'lodash/shuffle';
import { ALL_COLORS, ALL_NUMBERS, ALL_SHADINGS, ALL_SHAPES, CardProps } from "../types/CardProps";
import { Deck } from "../types/Game";

function generateSortedDeck(): Deck {
  const deck: Deck = new Array<CardProps>();

  ALL_SHAPES.forEach((shape) =>
    ALL_COLORS.forEach((color) =>
      ALL_SHADINGS.forEach((shading) =>
        ALL_NUMBERS.forEach((number) => {
          deck.push({
            shape,
            shading,
            number,
            color
          })
        }))));

  return deck;
}


export const useDeck = (random: boolean) => {
  const [deck] = useState(() => {
    const sortedDeck = generateSortedDeck();
    if (!random) return sortedDeck;
    return shuffle(sortedDeck);
  })
  return {
    deck
  }
}