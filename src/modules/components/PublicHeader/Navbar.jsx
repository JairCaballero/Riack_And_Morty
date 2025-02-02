import SearchCharacter from "@/modules/components/layouts/SearchCharacter"

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="container container-center">
        <div className="navbar-content">
          <a className="navbar-brand" href="/">
            Characters of Rick and Morty
          </a>
          <SearchCharacter />
        </div>
      </div>
    </nav>
  )
}

export default Navbar