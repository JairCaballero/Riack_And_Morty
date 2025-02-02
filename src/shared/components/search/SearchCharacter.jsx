import { FiltersContext } from "@/modules/characters/context/Filters"
import { useContext } from "react"

const SearchCharacter = () => {
  const { onSearch } = useContext(FiltersContext)

  const handleChange = (e) => {
    const value = e.target.value
    onSearch({ name: value.trim() })
  }

  return (
    <input onChange={(event) => handleChange(event)} type="text" placeholder='Rick Sanchez...' className='search-input' />
  )
}
export default SearchCharacter