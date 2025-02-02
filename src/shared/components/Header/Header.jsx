import SearchCharacter from "@/shared/components/search/SearchCharacter"
import styles from './Header.module.css'

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container container-center">
        <div className={styles.navbar_content}>
          <a className={styles.navbar_brand} href="/">
            Rick and Morty
          </a>
          <SearchCharacter />
        </div>
      </div>
    </nav>
  )
}

export default Header