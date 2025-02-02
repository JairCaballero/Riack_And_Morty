import SearchCharacter from "@/shared/components/search/SearchCharacter"

const Header = () => {

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

export default Header