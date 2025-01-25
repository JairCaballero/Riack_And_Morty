import { createContext, useEffect, useRef, useState } from "react"
import { getRickAndMoryData } from "@/modules/core/services/services"

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [hasMore, setHasMore] = useState(false)
  const debounceRef = useRef(null)

  const getData = async () => {
    const response = await getRickAndMoryData({ page, name: searchValue })

    if (response.error) {
      setPage(1)
      setCharacters([])
      setError(response.error)
      return
    }

    if (response?.results?.length > 0) {
      setCharacters((prevCharacters) =>
        page === 1 ? response.results : [...prevCharacters, ...response.results]
      )
      setHasMore(page < response.info.pages)
    } else {
      setHasMore(false)
    }
  };

  const onSearch = ({ name }) => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setHasMore(true)
      setSearchValue(name)
      if (error) setError(null)
      setPage(1)
    }, 700)
  }

  useEffect(() => {
    getData()
  }, [page, searchValue])

  return (
    <FiltersContext.Provider value={{
        characters,
        page,
        error,
        searchValue,
        hasMore,
        setPage,
        onSearch,
      }}>
      {children}
    </FiltersContext.Provider>
  )
}