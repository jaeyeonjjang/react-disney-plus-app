import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import "./SearchPage.css";
import { useDebounce } from '../../hooks/useDebounce';

const SearchPage = () => {

  const [searchResults, setSearchResults] = useState([]);
  console.log("searchResults :: " + searchResults);
  
  const useQuery =() =>{
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get("q")
  const navigate = useNavigate();
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if(searchTerm){
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try{
      const response = await axios.get(`search/multi?incloud_adult=false&query=${searchTerm}`);
      setSearchResults(response.data.results);
      console.log("response :: " + response);
      console.log("response.data.results :: " + response.data.results)
    }catch(error){
      console.log(error);
    }
  }
  if(searchResults.length> 0) {
    return (
      <section className='search-container'>
        {searchResults.map((movie)=>{
          if(movie.backdrop_path !== null && movie.media_type !== "person"){
            const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className='movie' key={movie.id}>
                <div className='movie_column-poster' onClick={() => navigate(`/${movie.id}`)}>
                  <img src={movieImageUrl} alt="movie" className='movie_poster'></img>
                </div>
              </div>
            )
          }
        })}
      </section>
    )
  }else{
    return (
      <section className='no-results'>
        <div className='no-results_text'>
          <p>
            찾고자하는 검색어 "{searchTerm}"에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    )
  }
}

export default SearchPage


//Debounce란 ? 
// 사용자가 미리 결정된 시간 동안 타이핑을 멈출 때까지 keyup이벤트의 처리를 지연시킨다.
// 이렇게 하면 ui코드가 모든 이벤트를 처리할 필요가 없고 서버로 전송되는 api호출 수도 크게 줄어든다.
// 입력된 모든 문자를 처리하면 성능이 저하되고 백엔드에 불필요한 로직이 추가될 수 있음