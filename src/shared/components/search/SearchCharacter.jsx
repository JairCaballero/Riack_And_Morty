import { useContext } from "react"
import { FiltersContext } from "@/modules/characters/context/Filters"
import styles from './SearchCharacter.module.css'

const SearchCharacter = () => {
  const { onSearch } = useContext(FiltersContext)

  const handleChange = (e) => {
    const value = e.target.value
    onSearch({ name: value.trim() })
  }

  return (
    <input
      onChange={(event) => handleChange(event)}
      type="text"
      placeholder='Rick Sanchez...'
      className={styles.search_input}
    />
  )
}
export default SearchCharacter