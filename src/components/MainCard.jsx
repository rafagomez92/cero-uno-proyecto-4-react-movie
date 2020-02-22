import React from 'react';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

const MainCard = (props) => {
    const imgMain = (`${IMAGE_BASE_URL}w1280${props.movie.backdrop_path}`)   
    const movieId = `/Movie/${props.movie.id}`
    
    
    return (
        <div className="card bg-dark rounded-0">
            <Link to={movieId}>
            <img src={imgMain} className="card-img" height="570px" alt="..."/>            
            <div className="card-img-overlay">
                    <h2 className="card-title text-white">{props.movie.original_title}</h2>
                    <h5 className="card-text text-white">{props.movie.overview}</h5>                    
            </div>
            </Link>
        </div>
    );
}

export default MainCard;