import React, {useCallback, useEffect, useState} from 'react'
import axios from '../api/axios'

const Row = (title, id, fetchUrl) => {

  console.log("id :: " + id)
  console.log("title :: " + title)

  const [movies,setMovies] = useState([]);

  const fetchMovieDate = useCallback( async () => {
    const response = await axios.get(fetchUrl);
    console.log("response :: " + response);
    setMovies(response.data.results);
    console.log("setMovies :: " + response.data.results)
  },[fetchUrl]);

  useEffect(() => {
    fetchMovieDate();
  },[fetchMovieDate])


  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider_arrow-left'>
          <span className='arrow'>
            {"<"}
          </span>
        </div>
        <div id={id} className='row_posters'>
          {movies.map(movie => (
            console.log("movie :: " + movie.id),
            <img
              key={movie.id}
              className='row_poster'
              src={`https://image.tmdb.org/t/p/original/${movie.background_path}`}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Row