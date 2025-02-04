import { useContext, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FiltersContext } from "@/modules/characters/context/Filters"
import { PublicRoutes } from "@/router/routes"
import styles from './SearchCharacter.module.css'

const SearchCharacter = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const debounceRef = useRef(null)
  const { onSearch } = useContext(FiltersContext)

  const handleChange = (e) => {
    const value = e.target.value

    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      if (location.pathname !== PublicRoutes.character) {
        navigate(PublicRoutes.character)
      }
      onSearch({ name: value.trim() })
    }, 700)
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