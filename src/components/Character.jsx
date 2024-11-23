export default function Character({ name, imageUrl, id, onclick }) {

  return (
    <button className="card" id={id} onClick={onclick}>
        <p>{name}</p>
        <img
          src={imageUrl}
          alt={name}
        />
    </button>
  )
}
