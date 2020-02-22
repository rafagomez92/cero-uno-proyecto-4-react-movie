import React from 'react';
import { Link } from 'react-router-dom';

const InformationMovie = (props) => {
    const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';
    const imgMovie = (`${IMAGE_BASE_URL}w500${props.movie.poster_path}`);

    const calcTime = (time) => {
      const hours = Math.floor(time / 60);
      const mins = time % 60;
      return `${hours}h ${mins}m`;
    }

    const convertMoney = (money) => {      
      let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      });
      return formatter.format(money);
    }
    
    // const directors = result.crew.filter(
    //   member => member.job === "Director"
    // );
  

    return (
        <div className="container justify-content-center">

        <div className="card mb-3" style={{maxWidth: '1000px'}} >
        <div className="row justify-content-center no-gutters">
          <div className="col-md-4">
            <img src={imgMovie} className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{props.movie.title}</h1>
              <h4 className="card-text">{props.movie.overview}</h4>                            
              {/* <h3>{directors}</h3> */}
              <div className="mt-5">
              <h5>IMDB Rating</h5>              
              <h6>{props.movie.vote_average * 10}</h6>              
              <meter
                min="0"
                max="100"
                optimum="100"
                low="40"
                high="70"
                value={props.movie.vote_average * 10}
                />                                                                                 
              </div>              
              <div className="row text-center bg-warning mt-5 text-white">
                <div className="col-4">
                <h4 className="card-text">{calcTime(props.movie.runtime)}</h4>
                <span className="text-muted">Running Time</span>                            
                </div>
                <div className="col-4">
              <h4 className="card-text">{convertMoney(props.movie.revenue)}</h4>
              <span className="text-muted">Budget</span>                            
                </div>
                <div className="col-4">
              <h4 className="card-text">{convertMoney(props.movie.budget)}</h4>
              <span className="text-muted">Revenue</span>                            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
      <Link to="/"><button className="bg-dark text-white"><h4>Regresar</h4>
      </button>
      </Link>              
      </div>
        </div>
    );
}

export default InformationMovie;