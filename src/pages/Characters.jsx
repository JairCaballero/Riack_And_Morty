import { useEffect, useRef, useState } from 'react'
import { getRickAndMoryData } from '@/modules/services/services'
import Character from '@/modules/components/Character'

const Characters = () => {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [hasMore, setHasMore] = useState(true)
  const elementRef = useRef(null)
  const debounceRef = useRef(null)

  const getData = async () => {
    const response = await getRickAndMoryData({ page, name: searchValue })
    if(response.error) return setError(response.error)

    if (response?.results?.length > 0) {
      setData([...data, ...response.results])
    }

    if (response?.results?.length === 0 || page >= response.info.pages) {
      setHasMore(false)
    }
  }

  const onInterceptor = async (entryes) => {
    // accedemos a las propiedades del observer
    const firstEntry = entryes[0]
    // si 'interceptamos' el elmento que estamos observando
    if(firstEntry.isIntersecting && hasMore) {
      setPage(page + 1)
      setTimeout( async () => {
        await getData()
      }, 500)
    }
  }

  const onInputChange = (event) => {
    const name = event.target.value.trim()
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout( async () => {
      setPage(1)
      setSearchValue(name)
      setHasMore(true)
    }, 700)
  }

  useEffect(() => {
    setData([])
  }, [searchValue])

  useEffect(() => {
    const observer = new IntersectionObserver(onInterceptor)
    if(observer && elementRef.current) observer.observe(elementRef.current)

    // eliminar observer si el componente se desmonta
    return () => {
      if(observer) observer.disconnect()
    }
  }, [data])

  return (
    <div className='container container-center'>
      <input onChange={onInputChange} type="text" placeholder='Rick Sanchez...' className='search-input' />
      {error ? (
        <p className='error-message'>{error}</p>
      ) : (
        <div className="card-content">
          {data.map( (element, index) => (
            <Character key={index} character={element} />
          ))}
          {hasMore && (
            <div className='container-loader'>
              <p ref={elementRef} className='text-loader'>cargando mas contenido.....</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
export default Characters