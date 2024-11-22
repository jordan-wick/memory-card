import Character from "./Character"

export default function CharactersList({ characters, handleClick }) {

  return (
    <ul className="characters-list">
      {characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            imageUrl={character.imageUrl}
            id={character.id}
            onClick={handleClick}
          />
        ))
      }
    </ul>
  )
}