import { useState, useEffect } from 'react'
import getCharacters from './components/GetCharacters'
import Character from './components/Character';
import './App.css'

function App() {
  const [charactersData, setcharactersData] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => {
      setcharactersData(data);
    });
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <ul className="characters-list">
        {charactersData.length > 0
        ? charactersData.map((index) => (
          <Character
            key={index._id}
            name={index.name}
            imageUrl={index.imageUrl}
          />
        ))
        : <p>No characters available</p>}
      </ul>
    </>
  )
}

export default App
