const Character = ({ character }) => {
  const { image, name, location, species } = character

  return (
    <div className="card">
      <img src={image} alt="imagen" />
      <div className="card-body">
        <h3>{name}</h3>
        <hr />
        <p>Location: {location.name}</p>
        <p>Species: {species}</p>
      </div>
    </div>
  )
}

export default Character