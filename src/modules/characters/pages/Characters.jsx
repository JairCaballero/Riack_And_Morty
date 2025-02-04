import { useContext, useRef, useEffect } from "react";

import { FiltersContext } from "@/modules/characters/context/Filters"
import LoaderData from "@/shared/components/loaderText/LoaderData"
import CharacterList from "@/modules/characters/components/CharacterList/CharacterList"
import "./PagesStyles.css"

const Characters = () => {
  const { characters, error, hasMore, setPage,loading } = useContext(FiltersContext)
  const elementRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver((entries) => {
      const firstEntry = entries[0]
      if (firstEntry.isIntersecting && hasMore) {
        setPage((prevPage) => prevPage + 1)
      }
    })

    if (elementRef.current) observerRef.current.observe(elementRef.current)

    return () => observerRef.current?.disconnect()
  }, [setPage, hasMore])

  return (
    <div className="container container-center characters-container">
      {characters.length === 0 && loading ? (
        <CharacterList loading={true} />
      ) : error ? (
          <div>
            {characters?.length === 0 ? (
              <p>No hay resultados para esta búsqueda</p>
            ) : (
              <p className="error-message">{error}</p>
            )}
          </div>
        ) : (
          <>
            <CharacterList characters={characters} />
            {hasMore && (
              <div style={{marginTop: '20px'}}>
                <div ref={elementRef} />
                <LoaderData />
              </div>
            )}
          </>
        )}
    </div>
  )
}

export default Characters