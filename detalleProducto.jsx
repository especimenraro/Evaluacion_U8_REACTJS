import React from 'react';
import { Link} from 'react-router-dom';
class detalle extends React.Component{
	constructor(){
		super()
	} // FIN CONSTRUCTOR
	
    render(){
    
        return(
					
				<div className="container">
					<div className="row">
						<div className="col-lg-12 contenedor-producto-detalle">
							<div className="row">
								<div className="col-lg-12 ">
									<h2>producto_nombre</h2>
									
								</div>			
							</div>
							<div className="row">
								<div className="col-lg-6 contenedor-producto-imagen">
									<img className="img-responsive" src="./imagenesBase/ajo.jpg" alt=""/>
								</div>		
								<div className="col-lg-6 contenedor-producto-info">
									<p>Precio: $producto_precio</p>
									<p>Cantidad Disponible: producto_disponible</p>
									<p>producto_descripcion</p>
								</div>		
							</div>
							<div className="row">
								<div className="col-lg-12 contenedor-producto-botones">
										
										<Link to='/catalogo' className="btn btn-default"> Atrás</Link>
								</div>		
							</div>
						</div>
						
					</div>
					</div>
					
              );
        } // FIN RENDER
        
      } // FIN CLASE

export default detalle;