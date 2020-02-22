import React, {Component} from 'react';
import MainCard from '../components/MainCard';
import ContentCard from '../components/ContentCard';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0d59c137d4b1775154cc094577fbe290';


class MovieContainer extends Component {    
    constructor(){
        super();        
        this.state = {
            movies : [],            
            page: 1,
            firstMovie: []            
        }
        this.handleForLoadMore = this.handleForLoadMore.bind(this);        
    }

    componentDidMount = () => {                        
        const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        fetch(url)
            .then(response => response.json())
            .then(info => {
                this.setState({                    
                    movies: info.results,                     
                    firstMovie: info.results[0]                                        
                });
            });                    
    } 
    
    handleForLoadMore = (e) => {
        e.preventDefault();        
        const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.page+1}`
        fetch(url)
            .then(response => response.json())
            .then(info => {        
                this.setState(                    
                    prevState => ({
                        movies: [
                            ...this.state.movies,
                                ...info.results                                    
                            ]
                        }
                    )
                );
            }
            );                

        this.setState({page: this.state.page + 1});
                              
    }
    
            
    render() {          
        const moviesCard = this.state.movies.map((movieCard,idx) =>
            <ContentCard movie={movieCard} id={idx} />
        );        
            return(
                <div>
                    <MainCard movie={this.state.firstMovie} />
                    
                    <div className="container text-center">
                        <h1 className="display-4 mt-4">Popular Movies</h1>
                        <div className="row">
                            <div className="col md-3">
                                {moviesCard}                    
                            </div>
                        </div>
                        <button className="bg-dark text-white" onClick={this.handleForLoadMore}><h3>Load More</h3></button>
                    </div>
                </div>
            );            
        
    }
}

export default MovieContainer;

 