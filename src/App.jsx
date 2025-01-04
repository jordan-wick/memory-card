import { useState } from 'react'
import './App.css'
import CharactersList from './components/CharactersList';
import useCharacters from './components/GetCharacter';
import { useEffect } from 'react';

function App() {
  const [difficulty, setDifficulty] = useState('6');
  const [loading, setLoading] = useState(false);
  const [charactersRendered, setCharactersRendered] = useState(false);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [score, setScore] = useState(0);

  const { characters, setCharacters, getRandomCharacters, shuffleCharacters } = useCharacters();







  function handleCardClick(e) {
    if (loading) return;
    const card = e.target.id;
    if (selectedCards.has(card)) {
      setScore(0);
      // Bring up game over screen (return)
    } else {
      setScore(score + 1);
      setSelectedCards(selectedCards.add(card));
      setLoading(true);
      shuffleCharacters();
      setLoading(false);
    }
  }

  const initializeCharacters = async (amount) => {
    console.log('Initializing...');
    setLoading(true);
    const randomCharacters = await getRandomCharacters(amount);
    setCharacters(randomCharacters);
    setCharactersRendered(true);
    setLoading(false);
  }

  useEffect(() => {
    if (!charactersRendered) {
      initializeCharacters(difficulty);
    }
  }, [difficulty, charactersRendered])

  return (
    <>
      <p className="score">{score}</p>
      <form className="settings">
        <select
          type="text"
          name="difficulty"
          id="difficulty"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="6">Easy</option>
          <option value="10">Medium</option>
          <option value="14">Hard</option>
        </select>
      </form>
      <CharactersList characters={characters} handleClick={handleCardClick} />
    </>
  )
}

export default App
