import React from 'react';
import { Link} from 'react-router-dom';

class barrasup extends React.Component{
	constructor(){
		super()
	} // FIN CONSTRUCTOR
	
    render(){
    
        return(
					
					<nav className="navbar navbar-default">
					  <div className="container">
					    <div className="navbar-header">
					    
					      <span className="navbar-brand">
					        La Bodeguita
					      </span>
					      
					    </div>
					    <ul className="nav navbar-nav navbar-right">
							<li className="icono"><Link to='/catalogo' ><i className="fi-thumbnails"></i></Link></li>
							<li className="icono"><Link to='/catalogo/carrito'><i className="fi-shopping-cart "></i><span  className="icono">0</span></Link></li>
							<li className="icono"><Link to='/'><i className="fi-arrow-right"></i></Link></li>
						</ul>
					  </div>
				</nav>
				
				
              );
        } // FIN RENDER
        
      } // FIN CLASE

export default barrasup;