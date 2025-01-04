import Character from "./Character"

export default function CharactersList({ characters, handleClick }) {

  return (
    <div className="characters">
      {characters.map((character) => (
          <Character
            key={character.id}
            name={character.name}
            imageUrl={character.sprite}
            id={character.id}
            onClick={handleClick}
          />
        ))
      }
    </div>
  )
}