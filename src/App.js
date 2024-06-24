import './App.css';
import requests from './api/request';
import Nav from './components/Nav.js';
import styled from 'styled-components';
import Banner from './components/Banner.js';
import Category from './components/Category.js';
import Row from './components/Row.js';

function App() {
  return (
    <Container>
      <Nav />
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated " id="TR" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action movies" id="AM" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies}/>
    </Container>
  );
}

export default App;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;

  }
`
;

