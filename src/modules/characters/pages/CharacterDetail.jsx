import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getCharacter } from "@/modules/characters/services/characterServices"

const CharacterDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    setLoading(true)
    try {
      const response = await getCharacter({ id });
      const { image, name, status, species, gender, type, url, origin, episode, created, location } = response
      setData({ image, name, status, species, gender, type, url, origin, episode, created, location })
    } catch (error) {
      console.error("Error fetching character:", error)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div style={{
      maxWidth: '800px',
      margin: '20px auto',
      padding: '16px',
      backgroundColor: '#f9f9f9',
    }}>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{
            width: '100%',
            height: '300px',
            backgroundColor: '#ddd',
            borderRadius: '8px',
            marginBottom: '16px'
          }} />
          <div style={{ height: '16px', width: '80%', backgroundColor: '#ddd', margin: '8px auto', borderRadius: '4px' }} />
          <div style={{ height: '16px', width: '60%', backgroundColor: '#ddd', margin: '8px auto', borderRadius: '4px' }} />
        </div>
      ) : data ? (
        <>
          <h1 style={{ fontSize: '28px', marginBottom: '10px' }}> Character Detail </h1>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
            <img
              src={data.image}
              alt={data.name}
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '8px',
                objectFit: 'cover'
              }}
            />
            <div>
              <h3 style={{ fontSize: '22px', marginBottom: '10px' }}>{data.name}</h3>
              <p><strong>Status:</strong> {data.status}</p>
              <p><strong>Species:</strong> {data.species} {data.type && `(${data.type})`}</p>
              <p><strong>Gender:</strong> {data.gender}</p>
              <p><strong>Origin:</strong>{data.origin.name}</p>
              <p><strong>Location:</strong>{data.location.name}</p>
              <p><strong>Episodes:</strong> {data.episode.length}</p>
              <p><strong>Created:</strong> {new Date(data.created).toLocaleDateString()}</p>
            </div>
          </div>
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}> Episodes in which he appears </h2>
          <div>
            <p>In Development....</p>
          </div>
        </>
      ) : (
        <p style={{ textAlign: 'center', color: 'gray' }}>Sin datos disponibles</p>
      )}
    </div>
  )
}

export default CharacterDetail;
