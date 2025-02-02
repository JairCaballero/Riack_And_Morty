import CharacterCard from "@/modules/characters/components/CharacterCard/CharacterCard"
import styles from './CharacterList.module.css'

const CharacterList = ({ characters = [] }) => {
  return (
    <div className={styles.characters_list}>
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  )
}
export default CharacterList