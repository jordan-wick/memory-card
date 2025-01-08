export default function Character({ name, imageUrl, id, handleClick }) {

  return (
    <button className="card" id={id} onClick={handleClick}>
        <p>{name}</p>
        <img
          src={imageUrl}
          alt={name}
        />
    </button>
  )
}
