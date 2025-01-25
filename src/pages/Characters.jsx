import { useContext, useRef, useEffect } from "react";
import { FiltersContext } from "@/modules/characters/context/Filters";
import Character from "@/modules/components/Character";
import LoaderData from "@/modules/components/LoaderData";

const Characters = () => {
  const { characters, error, hasMore, setPage } = useContext(FiltersContext);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  const onInterceptor = (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(onInterceptor);
    if (elementRef.current) observerRef.current.observe(elementRef.current);

    return () => observerRef.current?.disconnect();
  }, [hasMore]);

  return (
    <div className="container container-center" style={{ marginTop: "50px", padding: "0 15px" }}>
      {error ? (
        <div>
          {characters?.length === 0 ? (
            <p>No hay resultados para esta búsqueda</p>
          ) : (
            <p className="error-message">{error}</p>
          )}
        </div>
      ) : (
        <>
          <div className="card-content">
            {characters.map((character, index) => (
              <Character key={index} character={character} />
            ))}
          </div>
          {hasMore && (
            <div ref={elementRef}>
              <LoaderData />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Characters