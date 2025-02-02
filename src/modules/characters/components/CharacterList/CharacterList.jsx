import CharacterCard from "@/modules/characters/components/CharacterCard/CharacterCard"

const CharacterList = ({ characters = [] }) => {
  return (
    <div className="card-content">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </div>
  )
}
export default CharacterList