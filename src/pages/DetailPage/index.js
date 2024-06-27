import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

const DetailPage = () => {
  let {movieId} = useParams();
  const [movie, setmovies] = useState({});
  console.log("movieId :: " + movieId);

  useEffect(() =>{
    async function fetchData() {
      const response = await axios.get(
        `/movie/${movieId}`
      )
      setmovies(response.data);
    }
    fetchData();;
  },[movieId]) //movieId가 바뀌면 다시 콜을 해준다

  if(!movie) return null;

  return (
    <section>
      <img
        className='modal_poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="img">
      </img>
      </section>
  )
}

export default DetailPage