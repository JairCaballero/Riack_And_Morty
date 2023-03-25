import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";

function App() {

  const [character, setCharacter] = useState([]);
  const [info, setInfo] = useState({});
  const INI_URL = 'https://rickandmortyapi.com/api/character';

  const fetchCharacters = (url) => {
    fetch(url)
      .then( response => response.json())
      .then((data) => {
        setCharacter(data.results)
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  }

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect( () => {
    fetchCharacters(INI_URL);
    // [] -> que solo se ejecute una ves se renderisa y ya no mas
  }, [])

  return (
    <>
      <Navbar title='Rick And Morty App'/>
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onP={onPrevious} onN={onNext}/>
        <Characters charac={character} />
        <Pagination prev={info.prev} next={info.next} onP={onPrevious} onN={onNext}/>
      </div>
    </>
  );
}

export default App;
