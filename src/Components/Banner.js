import { useEffect, useState } from 'react';
import axios from '../axiosInterceptor';
import './Banner.css';


const Banner = ({ fetchUrl }) => {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setBanner(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const baseImgUrl = 'https://image.tmdb.org/t/p/original';

    console.log(banner);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }
    return (
        <header
            className='banner'
            style={{
                backgroundImage: `radial-gradient(transparent, #000000db), url('${baseImgUrl}${banner?.backdrop_path}')`,
                backgroundSize: 'cover',
                backdropPosition: 'center center'
            }}
        >
            {/* Background image */}
            <div className='banner__contents'>
                {/* title */}
                <h1 className='banner__title'>
                    {banner?.title || banner?.name || banner?.original_name}
                </h1>

                {/* 2 buttons */}
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List </button>
                </div>

                {/* description */}
                <h1 className='banner__description'>{truncate(banner?.overview, 200)}</h1>
            </div>
            <div className='banner__fadeBottom' />
        </header>
    );
};

export default Banner;
