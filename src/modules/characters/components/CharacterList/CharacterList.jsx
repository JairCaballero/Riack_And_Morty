import CharacterCard from "@/modules/characters/components/CharacterCard/CharacterCard"
import CharacterCardPlaceholder from "@/modules/characters/components/CharacterCard/CharacterCardPlaceholder"
import styles from './CharacterList.module.css'

const CharacterList = ({ characters = [], loading = false, dataPlaceholderLength = 10 }) => {

  if (loading) return (
    <div className={styles.characters_list}>
      {Array.from({ length: dataPlaceholderLength }, (_, index) => (
        <CharacterCardPlaceholder key={index} />
      ))}
    </div>
  )

  return (
    <div className={styles.characters_list}>
      {
        characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))
      }
    </div>
  )
}
export default CharacterList