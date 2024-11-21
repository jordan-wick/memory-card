import Character from "./Character"

export default function CharactersList({ charactersData, difficulty }) {
  let difficultySize;
  if (difficulty === 'easy') {
    difficultySize = 6;
  } else if (difficulty === 'medium') {
    difficultySize = 10;
  } else if (difficulty === 'hard') {
    difficultySize = 14;
  }

  const copiedData = charactersData;

  const randomCharacters = [];
  const randomIndices = new Set();
  for (let i = 0; i < difficultySize; i++) {
    const randomIndex = Math.floor(Math.random() * copiedData.length);
    const randomCharacter = copiedData[randomIndex];
    if (!randomIndices.has(randomIndex)) {
      randomCharacters.push(randomCharacter);
      randomIndices.add(randomIndex);
    } else {
      i--;
    }
  }
  
  return (
    <ul className="characters-list">
      {randomCharacters.map((index) => (
          <Character
            key={index._id}
            name={index.name}
            imageUrl={index.imageUrl}
          />
        ))
      }
    </ul>
  )
}