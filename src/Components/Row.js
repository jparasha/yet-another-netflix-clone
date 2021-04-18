import { useEffect, useState } from 'react';
import axios from '../axiosInterceptor';
import './Row.css';

const baseImgUrl = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(request.data.results, fetchUrl);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className={`row__posters ${isLargeRow && 'row__posters-large'}`}>
                {
                    movies.length && movies.map(movie => (
                        movie.backdrop_path && (
                            <img
                                className={`row__poster ${isLargeRow && 'row__poster-large'}`}
                                src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                                key={movie.id}
                                loading='lazy'
                            />
                        )
                    ))
                }
            </div>
        </div>
    );
};

export default Row;
