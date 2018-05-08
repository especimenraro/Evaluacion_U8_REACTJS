import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Inicio from './inicio.jsx';
import Catalogo from './catalogo.jsx';

class App extends React.Component{

constructor(){
super()

} // FIN CONSTRUCTOR

    render(){
        return(
        <Router>
            <div>
	            <Switch>
               	<Route exact path='/' component={Inicio} />
               	<Route path='/catalogo' component={Catalogo} />
               	
               </Switch>
              </div>
            </Router> 
              
            );
        } // FIN RENDER
        
        
      } // FIN CLASE

export default App;
