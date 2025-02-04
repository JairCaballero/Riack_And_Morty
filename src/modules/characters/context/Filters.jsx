import { createContext, useEffect, useState } from "react"
import { getRickAndMoryData } from "@/modules/characters/services/characterServices"

export const FiltersContext = createContext()

export const FiltersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [hasMore, setHasMore] = useState(false)

  const getData = async () => {
    setLoading(true)
    const response = await getRickAndMoryData({ page, name: searchValue })
    setLoading(false)

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
  }

  const onSearch = ({ name }) => {
    setCharacters([])
    setHasMore(false)
    setSearchValue(name)
    if (error) setError(null)
    setPage(1)
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
        loading,
        setPage,
        onSearch,
      }}>
      {children}
    </FiltersContext.Provider>
  )
}