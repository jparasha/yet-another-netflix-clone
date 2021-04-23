import { useEffect, useState } from 'react';
import './App.css';
import Row from './Components/Row';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import requests from "./requests";

function App() {
  const [playerId, setPlayerId] = useState(0);

  const updateCurrentPlayerRow = id => setPlayerId(id);

  return (
    <div className="App">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner fetchUrl={requests.fetchNetflixOriginals} />

      {/* Rows */}
      <Row
        rowId={1}
        isLargeRow
        playerId={playerId}
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        updateCurrentPlayerRow={updateCurrentPlayerRow}
      />
      <Row title={'Trending Now'} fetchUrl={requests.fetchTrending} rowId={2} playerId={playerId} updateCurrentPlayerRow={updateCurrentPlayerRow} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} rowId={3} playerId={playerId} updateCurrentPlayerRow={updateCurrentPlayerRow} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} rowId={4} playerId={playerId} updateCurrentPlayerRow={updateCurrentPlayerRow} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} rowId={5} playerId={playerId} updateCurrentPlayerRow={updateCurrentPlayerRow} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} rowId={6} playerId={playerId} updateCurrentPlayerRow={updateCurrentPlayerRow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} rowId={7} playerId={playerId} updateCurrentPlayerRow={updateCurrentPlayerRow} />
    </div>
  );
}

export default App;
