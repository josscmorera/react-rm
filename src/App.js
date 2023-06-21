import { useState, useEffect } from 'react';
import ImgCard from './Components/imgCard';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
      const data = await response.json();
      setData(data.results);
    };
    getData();
  }, [currentPage]);

  const nextPage = () => setCurrentPage((page) => page + 1);
  const previousPage = () => setCurrentPage((page) => page - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
        <button onClick={previousPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={nextPage} disabled={currentPage === 42}>Next</button>
        <div className="characters">
          {data.map((character) => (
            <ImgCard key={character.id} character={character} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;