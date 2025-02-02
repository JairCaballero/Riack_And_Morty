import { Link } from "react-router-dom"
import { PublicRoutes } from "@/router/routes"
import styles from './CharacterCard.module.css'

const CharacterCard = ({ character }) => {
  const { image, name, location, species, id } = character

  return (
    <Link className={styles.card} to={`${PublicRoutes.characterID}/${id}`}>
      <img
        src={image}
        alt="imagen"
        loading="lazy"
      />
      <div className={styles.card_body}>
        <h3>{name}</h3>
        <hr />
        <p>Location: {location.name}</p>
        <p>Species: {species}</p>
      </div>
    </Link>
  )
}

export default CharacterCard