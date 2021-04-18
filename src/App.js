import './App.css';
import Row from './Components/Row';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import requests from "./requests";

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner fetchUrl={requests.fetchNetflixOriginals} />

      {/* Rows */}
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={'Trending Now'} fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
