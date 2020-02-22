import React, { Component } from 'react';
import InformationMovie from '../components/InformationMovie';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '0d59c137d4b1775154cc094577fbe290';


    
class MovieInformation extends Component {
    constructor(props){
        super(props);                
        this.state = {
            id : this.props.data,                                    
            movie: []            
        }        
    }
    
    

    componentDidMount = () => {
        console.log(this.state.id);
        
        const url = `${API_URL}movie/${this.state.id}?api_key=${API_KEY}&language=en-US`;
        fetch(url)
        .then(response => response.json())
        .then(info => {                
            this.setState({
                movie: info
            });
        });                   
    }


    render() {        
        return(                        
            <InformationMovie movie={this.state.movie}/>
        );
    }
}

export default MovieInformation;