import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Barrasup from './barraSup.jsx';
import Barrabuscador from './barraBuscador.jsx';
import Galeria from './galeria.jsx';
import Carrito from './carrito.jsx';
import Detalle from './detalleProducto.jsx';

class Catalogo extends React.Component{
	constructor(){
		super()
	} // FIN CONSTRUCTOR
	
    render(){
    
        return(
					
					<div className="container">
						<div className="row">
							<div className="col-lg-12 ">
								<div className="contenedor-barrasup">
									<Barrasup/>
								</div>
								<div className="contenedor-barrabuscador">
									<Barrabuscador/>
								</div>
								<div className="contenedor-catalogo">
									<Switch>
				               	<Route exact path='/catalogo' component={Galeria} />
				               	<Route path='/catalogo/carrito' component={Carrito} />
				               	<Route path='/catalogo/detalle' component={Detalle} />
				               </Switch>
								</div>
							</div>
						</div>	
					</div>	
					
              );
        } // FIN RENDER
        
      } // FIN CLASE

export default Catalogo;