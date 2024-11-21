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


  return (
    <ul className="characters-list">
      {charactersData.map((index) => (
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