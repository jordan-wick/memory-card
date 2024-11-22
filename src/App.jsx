import { useState } from 'react'
import './App.css'
import CharactersList from './components/CharactersList';
import useCharacters from './components/GetCharacter';

function App() {
  const [difficulty, setDifficulty] = useState('6');
  const [loading, setLoading] = useState(false);
  const [charactersRendered, setCharactersRendered] = useState(false);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [score, setScore] = useState(0);

  const { characters, setCharacters, getRandomCharacters, shuffleCharacters } = useCharacters();



  const initializeCharacters = async (amount) => {
    setLoading(true);
    const randomCharacters = await getRandomCharacters(amount);
    setCharacters(randomCharacters);
    setCharactersRendered(true);
  }
  if (charactersRendered === false) initializeCharacters(difficulty);

  function handleCardClick(e) {
    const selectedCard = e.target.id;
    if (selectedCards.has(selectedCard)) {
      setScore(0);
    } else {
      setScore(score + 1);
      selectedCards.add(selectedCard);
    }

  }


  return (
    <>
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
