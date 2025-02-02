import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getCharacter } from "@/modules/characters/services/characterServices"
import "./PagesStyles.css"

const CharacterDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    setLoading(true)
    try {
      const response = await getCharacter({ id });
      const { image, name, status, species, gender, type, url, origin, episode, created, location } = response;
      setData({ image, name, status, species, gender, type, url, origin, episode, created, location });
    } catch (error) {
      console.error("Error fetching character:", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="character-detail">
      {loading ? (
        <div className="character-loading">
          <div className="loading-placeholder-image" />
          <div className="loading-placeholder-text long" />
          <div className="loading-placeholder-text short" />
        </div>
      ) : data ? (
        <>
          <h1 className="character-detail-title">Character Detail</h1>
          <div className="character-container">
            <img
              src={data.image}
              alt={data.name}
              className="character-image"
            />
            <div className="character-info">
              <h3 className="character-info-title">{data.name}</h3>
              <p>
                <strong>Status:</strong> {data.status}
              </p>
              <p>
                <strong>Species:</strong> {data.species} {data.type && `(${data.type})`}
              </p>
              <p>
                <strong>Gender:</strong> {data.gender}
              </p>
              <p>
                <strong>Origin:</strong> {data.origin.name}
              </p>
              <p>
                <strong>Location:</strong> {data.location.name}
              </p>
              <p>
                <strong>Episodes:</strong> {data.episode.length}
              </p>
              <p>
                <strong>Created:</strong> {new Date(data.created).toLocaleDateString()}
              </p>
            </div>
          </div>
          <h2 className="character-episodes-title">Episodes in which he appears</h2>
          <div>
            <p>In Development....</p>
          </div>
        </>
      ) : (
        <p className="character-no-data">Sin datos disponibles</p>
      )}
    </div>
  );
};

export default CharacterDetail;
