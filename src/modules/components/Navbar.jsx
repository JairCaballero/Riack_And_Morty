import { FiltersContext } from "@/modules/characters/context/Filters"
import { useContext } from "react"

const Navbar = () => {
  const { onSearch } = useContext(FiltersContext)

  const handleChange = (e) => {
    const value = e.target.value
    onSearch({ name: value.trim() })
  }

  return (
    <nav className="navbar">
      <div className="container container-center">
        <div className="navbar-content">
          <a className="navbar-brand" href="/">
            Characters of Rick and Morty
          </a>
          <input onChange={(event) => handleChange(event)} type="text" placeholder='Rick Sanchez...' className='search-input' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar