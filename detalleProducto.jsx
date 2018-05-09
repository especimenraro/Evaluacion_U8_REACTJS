import React from 'react';
import { Link} from 'react-router-dom';
import * as request from 'superagent';

class Detalle extends React.Component{
	constructor(){
		super()
		this.state = {datos:{},producto:{}, url: ''}
	} // FIN CONSTRUCTOR
	
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
							for (let key in this.state.datos) {
								if (this.state.datos[key].nombre ==this.props.match.params.id ) {	
										this.setState({producto: this.state.datos[key]}) 	
										console.log(this.state.producto,this.props.match.params.id)	
										let urlString = this.state.producto.imagen.slice(1)
										this.setState({url: urlString})
										console.log(this.state.url)	
									}		
								}
					}
				}) // FIN .END 
				
				
	} // FIN COMPONENT WILL MOUNT
	
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
							<img className=" center-block img-producto" src="../imagenesBase/ajo.jpg" alt=""/>
							<div className="row">
								<div className="col-lg-6 contenedor-producto-imagen">
									<img className="img-producto" src="../imagenesBase/ajo.jpg" alt=""/>
								</div>		
								<div className="col-lg-6 contenedor-producto-info">
									<p>Precio:$ {this.state.producto.precio}</p>
									<p>Cantidad Disponible:{this.state.producto.disponible} </p>
									<p>{this.state.producto.descripcion}</p>
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