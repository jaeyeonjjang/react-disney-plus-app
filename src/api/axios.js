import axios from 'axios';

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params:{
        api_key : "4c799dfcab857bdea38ba5d0705d3a49",
        language : "ko-KR"
    }
})

export default instance;