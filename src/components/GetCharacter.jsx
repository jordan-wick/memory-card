import { useState } from "react";

export default function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const POSSIBLE_CHARACTERS = 7438;

  const getCharacter = async ({ id }) => {
    console.log('Calling API...')
    const response = await fetch(`https://api.disneyapi.dev/character/${id}`, {
      mode: 'cors',
    });
    const result = await response.json();
    const { name, imageUrl } = result.data;
    return { name, imageUrl, id };
  }

  const getRandomCharacters = async (amount) => {
    const charactersForDisplay = [];
    let attempts = 0;
    while (charactersForDisplay.length < amount && attempts < 10) {
      const randomId = Math.floor(Math.random() * POSSIBLE_CHARACTERS) + 1; // Random number between 1 and POSSIBLE_CHARACTERS
      const isDuplicateId = charactersForDisplay.find(({ id }) => id === randomId);
      if (isDuplicateId) attempts++;
      else charactersForDisplay.push({id: randomId});
    }

    return await Promise.all(charactersForDisplay.map(getCharacter));
  }

  function shuffleCharacters() {
    const availableCards = [...characters];
    const shuffleCharacters = [];
    while (availableCards.length) {
      const index = Math.floor(Math.random() * availableCards.length);
      const card = availableCards[index];
      card.id = crypto.randomUUID();
      shuffleCharacters.push(card);
      availableCards.splice(index, 1);
    }

    setCharacters(shuffleCharacters);
  }

  return { characters, getRandomCharacters, shuffleCharacters, setCharacters };
}

// Code citation: Sharkri