import { useEffect, useState } from 'react';
import axios from '../axiosInterceptor';
import YouTube from 'react-youtube';
import './Row.css';

const baseImgUrl = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, fetchUrl, isLargeRow, rowId, playerId, updateCurrentPlayerRow }) => {

    const [movies, setMovies] = useState([]);
    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 0
        }
    };

    const handlePosterClick = async movie => {
        try {
            const trailerId = await axios.get(`/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_MOVIES_API_KEY || ''}`);
            (trailerId?.data?.results[0]?.key !== videoId) && setVideoId(trailerId.data.results[0]?.key);
            updateCurrentPlayerRow(rowId);
        } catch (error) {
            setVideoId('');
        }
    };

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
                                onClick={() => handlePosterClick(movie)}
                            />
                        )
                    ))
                }
            </div>
            {
                (!playerId || playerId === rowId) && videoId && <div className={'row__player'}>
                    <YouTube videoId={videoId} opts={opts} />
                </div>
            }
        </div>
    );
};

export default Row;
