import { useContext, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FiltersContext } from "@/modules/characters/context/Filters"
import { PublicRoutes } from "@/router/routes"
import styles from './SearchCharacter.module.css'

const SearchCharacter = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const debounceRef = useRef(null)
  const [inputValue, setInputValue] = useState('')
  const { onSearch } = useContext(FiltersContext)

  const handleChange = (e) => {
    let value = e.target.value

     // 1️. Evitar tabulaciones
     if (/\t/.test(value)) {
      return // No actualiza el estado si el usuario presiona "Tab"
    }

    // 2️. Evitar más de un espacio seguido antes de setear el estado
    if (/\s{2,}/.test(value)) {
      return // No actualiza el estado si hay dos espacios seguidos
    }

    setInputValue(value) // Guarda el valor solo si es válido

    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      if (location.pathname !== PublicRoutes.character) {
        navigate(PublicRoutes.character)
      }

      onSearch({ name: value })
    }, 700)
  }

  return (
    <input
      onChange={handleChange}
      value={inputValue}
      type="text"
      placeholder="Rick Sanchez..."
      className={styles.search_input}
    />
  )
}

export default SearchCharacter
