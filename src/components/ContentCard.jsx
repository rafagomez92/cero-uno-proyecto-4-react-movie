import React from 'react';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';



const ContentCard = (props) => {    
    const imgCard = (`${IMAGE_BASE_URL}w500${props.movie.poster_path}`)
    const movieId = `/Movie/${props.movie.id}`

    return (
        <Link to={movieId}>                                                
            <img src={imgCard} width="250px" className="card-body" alt=""/>        
        </Link>

    );
}

export default ContentCard;