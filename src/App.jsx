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
      <ul className="characters-list">
        {charactersData.length > 0
        ? charactersData.map((index) => (
          // only characters in big hero six &&
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
