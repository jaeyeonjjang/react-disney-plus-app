import React, {useCallback, useEffect, useState} from 'react'
import axios from '../api/axios'
import "./Row.css"
import MovieModal from './MovieModal'

const Row = ({title, id, fetchUrl}) => {

  const [movies,setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelection] = useState({});

  const fetchMovieDate = useCallback( async () => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  },[fetchUrl]);

  useEffect(() => {
    fetchMovieDate();
  },[fetchMovieDate])

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelection(movie);
  }


  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider_arrow-left'>
          <span className='arrow'
           onClick={() => {
            document.getElementById(id).scrollLeft -= window.innerWidth - 80;
           }}>
            {"<"}
          </span>
        </div>
        <div id={id} className='row_posters'>
          {movies.map(movie => (
            <img
              key={movie.id}
              className='row_poster'
              alt={movie.name}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              onClick={() => handleClick(movie)}
              />
          ))}s
        </div>
        <div className='slider_arrow-right'>
          <span className='arrow'
          onClick={() => {
            document.getElementById(id).scrollLeft += window.innerWidth - 80;
          }}>
            {">"}
          </span>
        </div>
      </div>

       {modalOpen && 
        <MovieModal
        {...movieSelected}
        setModalOpen = {setModalOpen}
        />

      } 
    </div>
  )
}

export default Row