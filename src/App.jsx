import { useState, useEffect } from 'react'
import GetCharacter from './components/GetCharacter'
import './App.css'
import CharactersList from './components/CharactersList';

function App() {
  const [charactersData, setCharactersData] = useState([]);
  const [movie, setMovie] = useState('');
  const [difficulty, setDifficulty] = useState('easy');

  useEffect(() => {
    getCharacters(movie).then((data) => {
      setCharactersData(data);
    });
  }, [movie]);

  return (
    <>
      <form className="settings">
        <select
          type="text"
          name="movie"
          id="movie"
          onChange={(e) => {setMovie(e.target.value)}}
        >
          <option value="">--Pick a movie--</option>
          <option value="tangled">Tangled</option>
          <option value="frozen">Frozen</option>
          <option value="moana">Moana</option>
          <option value="wreck-it-ralph">Wreck-It Ralph</option>
          <option value="zootopia">Zootopia</option>
          <option value="big-hero-6">Big Hero 6</option>
          <option value="Encanto">Encanto</option>
        </select>
        <select
          type="text"
          name="difficulty"
          id="difficulty"
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </form>
      <CharactersList charactersData={charactersData} difficulty={difficulty} />
    </>
  )
}

export default App
