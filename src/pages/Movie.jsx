import React from 'react';

// import {useParams} from 'react-router-dom';
import MovieInformation from '../containers/MovieInformation';

const Movie = (props) => {    
    // const id = useParams();
    const { params } = props.match;                      
    console.log(params.id);
    return(
        <div>
            <MovieInformation data={params.id}/>
        </div>
    );
}

export default Movie;