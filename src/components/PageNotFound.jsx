import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return(
        <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <div>
                <h1 className="display-1">¡Oh no!</h1>
                <h2 className="display-4">La página no se ha encontrado (Error 404)</h2>
                <h2>Desafortunadamente la página que buscas no existe.</h2>                                
                <Link className="btn btn-dark" to="/"><h3>Home</h3></Link>                                                            
            </div>
        </div>
    </div>
</div>
    );
}

export default PageNotFound;