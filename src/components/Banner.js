import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import requests from '../api/request'
import "./Banner.css"

const Banner = () => {

  const [movie,setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const fetchData = async() => {
    //현재 상영 중인 영화 정보를 가져오기(여러영화)
    const response = await axios.get(requests.fetchNowPlaying)
    //Promise{<pending>} 이라고 나오는 이유는 비동기로  처리하는 중이기 때문.
    // 여러 영화중 영화 하나의 ID를 가져오기
    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id

    //특정 영화의 더 상세한 정보를 가져오기 (비디오 정보도 포함)
    const {data:movieDetail} = await axios.get(`movie/${movieId}`,{
      params:{ append_to_response:"vidios"}
    })
    console.log(movieDetail);
    setMovie(movieDetail);
  }

  const truncae = (str,n) => {
    return str?.length > n ? str.substring(0,n) + "..." : str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center"
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className='banner_buttons'>
          {/* {console.log("ff :" +  movie?.videos?.results[0]?.key)} */}
          {movie?.videos?.results[0]?.key && 
            <button
              className='banner_button_play'
            >
              Play
            </button>
          }
        </div>
        <p className='banner_description'>
          {truncae(movie.overview,10)}
        </p>
      </div>
          <div className='banner--fadeBottom'></div>
    </header>
  )
}

export default Banner