import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import CharactersList from './components/CharactersList';
import useCharacters from './components/GetCharacter';
import Modal from './components/Modal';
import Loader from './components/Loader';

function App() {
  const [difficulty, setDifficulty] = useState('6');
  const [loading, setLoading] = useState(false);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [score, setScore] = useState(0);
  const [modalOpen, setModalOpen] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const { characters, setCharacters, getRandomCharacters, shuffleCharacters } = useCharacters();

  const handleCardClick = (e) => {
    console.log(e.target.closest('button').className);
    if (e.target.closest('button').className !== 'card') return;
    const card = e.target.id;
    if (selectedCards.has(card)) {
      endGame();
    } else {
      setScore(score + 1);
      setSelectedCards(selectedCards.add(card));
      setLoading(true);
      shuffleCharacters();
      setLoading(false);
    }
  }

  const endGame = () => {
    setScore(0);
    setSelectedCards(new Set());
    setGameOver(true);
    setModalOpen(true);
  }


  const handleClose = () => {
    setModalOpen(false);
  }

  useEffect(() => {
    const loader = document.querySelector('.loader');
    if (loading) {
      loader.style.display = 'block';
    } else loader.style.display = 'none';
  }, [loading]);

  // const handleOpen = () => {
  //   setModalOpen(true);
  // }

  const startGame = async (e) => {
    e.preventDefault();
    console.log('Initializing...');
    setModalOpen(false);
    setLoading(true);
    const randomCharacters = await getRandomCharacters(difficulty);
    setCharacters(randomCharacters);
    setLoading(false);
    console.log('Retrieved characters');
  }

  return (
    <>
      <Loader />
      <Modal
        isOpen={modalOpen}
        onClose={handleClose}
        gameOver={gameOver}
      >
        <form
          className="settings"
        >
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
        <button onClick={startGame}>Go!</button>
      </form>
      </Modal>
      <p className="score">{score}</p>

      <CharactersList characters={characters} handleClick={handleCardClick} />
    </>
  )
}

export default App
