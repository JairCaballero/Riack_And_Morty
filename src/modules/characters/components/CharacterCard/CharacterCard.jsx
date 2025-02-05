import { Link } from "react-router-dom"
import { PublicRoutes } from "@/router/routes"
import styles from './CharacterCard.module.css'
import { SeparteText } from "@/utils/SeparateText"

const TypeStatus = {
  alive: 'Alive',
  dead: 'Dead',
  unknown: 'unknown'
}

const CharacterCard = ({ character }) => {
  const { image, name, location, id, status, species, type } = character

  return (
    <Link className={styles.card} to={`${PublicRoutes.characterID}/${SeparteText(name).toLowerCase()}-${id}`}>
      <div>
        <img
          src={image}
          alt="imagen"
          loading="lazy"
        />
      </div>
      <div className={styles.card_body}>
        <div>
          <h3 className={`${styles.character_name} line-clamp-1`}>{name}</h3>
          <div className={styles.status_content}>
            <div className={`${styles.status_circle} ${status === TypeStatus.alive ? styles.s_alive : status === TypeStatus.dead ? styles.s_dead : styles.s_unknown }`}></div>
            <p className="line-clamp-1">{status} - {species}</p>
          </div>
        </div>
        <div>
          <span className={styles.subTitle}>Last Location</span>
          <p className="line-clamp-1">{location.name}</p>
        </div>
        <div>
          <span className={styles.subTitle}>Type</span>
          <p className="line-clamp-1">{type !== "" ? type : 'Unknown'}</p>
        </div>
      </div>
    </Link>
  )
}

export default CharacterCard