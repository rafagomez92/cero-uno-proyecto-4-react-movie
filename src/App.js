import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Movie from './pages/Movie';
import Header from './components/Header'


const App = () => {
  return(
      <Router>
        <div>
          <Header />        
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/movie/:id" component={Movie}/>              
              <Route component={NotFound}/>
          </Switch>
        </div>                    
      </Router>
  );
  
          
}

export default App;
