export default function Character({ name, imageUrl }) {

  return (
    <li>
      <p>{name}</p>
      <img
        src={imageUrl}
        alt={name}
      />
    </li>
  )
}
