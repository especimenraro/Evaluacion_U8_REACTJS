import React from 'react';
import { Link} from 'react-router-dom';
import * as request from 'superagent';

class Detalle extends React.Component{
	constructor(){
		super()
		this.state = {datos:{},producto:{}}
	} // FIN CONSTRUCTOR
	/*
	componentWillMount() {
			request 
				.get('https://tienda-57b3d.firebaseio.com/bodega/.json')
				.set('Content-Type': 'application/json')
				.end((err,res) => {
									
					if (err || !res.ok) {
						console.log('Error en la comunicacion' + err.message)
					} else {
												
							this.setState({
							datos:  res.body 
							})	
							
					}
				}) // FIN .END 
				
				for (key in this.state.datos) {
					if (this.state.datos[key] ==this.props.match.params.id ) {	
							this.state.producto = 		this.state.datos[key]		
						}		
					}
	} // FIN COMPONENT WILL MOUNT
	*/
    render(){
    
        return(
					
				<div className="container">
					<div className="row">
						<div className="col-lg-12 contenedor-producto-detalle">
							<div className="row">
								<div className="col-lg-12 ">
									<h2>{this.state.producto.nombre}</h2>
									
								</div>			
							</div>
							<div className="row">
								<div className="col-lg-6 contenedor-producto-imagen">
									<img className="img-responsive" src={this.state.producto.imagen} alt=""/>
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

export default Detalle;