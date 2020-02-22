import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // Variable donde guardo el icono extraido de internet
    const urlImg = "https://img.icons8.com/color/48/000000/film-reel.png";

    return(
        <div className=" ">
            <nav className="nav justify-content-center navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">            
                <div className="col-8"> 
                    <Link className="navbar-brand text-white font-weight-bold" to="/">
                    <img src={urlImg} width="35" height="35" alt="icon movie" className="mr-3"/>                        
                        Home
                    </Link>                    
                </div>
                <div className="col-4 nav justify-content-end"> 
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
                        </form>                
                </div>
            </div>                
            </nav>            
        </div>
    );
}

export default Header;