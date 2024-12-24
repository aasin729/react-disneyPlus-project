import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "1b49b62a99c206c53fc8c672621bd6e9",
        language: "ko-KR"
    }
})

export default instance;