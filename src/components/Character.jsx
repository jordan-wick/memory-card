export default function Character({ name, imageUrl, id }) {

  return (
    <li className="card" id={id}>
      <p>{name}</p>
      <img
        src={imageUrl}
        alt={name}
      />
    </li>
  )
}
