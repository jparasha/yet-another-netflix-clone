import axios from 'axios';

const interceptor = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default interceptor;
