import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Barrasup from './barraSup.jsx';
import Barrabuscador from './barraBuscador.jsx';
import Galeria from './galeria.jsx';
import Carrito from './carrito.jsx';
import Detalle from './detalleProducto.jsx';
import * as request from 'superagent';

class Catalogo extends React.Component{
	constructor(){
		super()
		this.state = {cantidad: 0, datos: [], carrito: [], total: 0}
		this.actualizaCantidad = this.actualizaCantidad.bind(this)
	} // FIN CONSTRUCTOR
	
	componentWillMount() {
		var cantidad = 0
		var subtotal = 0
		
		// REQUEST PARA LEER CARRITO
		
		request
			.get('https://tienda-57b3d.firebaseio.com/usuarios/0/carrito/.json')
			.set('Content-Type': 'application/json')
			.end((err,res)=>{
				if (err || !res.ok) {
					console.log('Error en la comunicacion:' + err.message)				
				}
				else {
					
					for (let key in res.body) {
								cantidad += 1*res.body[key].unidades			
								subtotal += 1*res.body[key].subtotal
					}
					this.setState({cantidad: cantidad, carrito: res.body, total: subtotal})
					
				}
			}) // FIN .END
			
			// REQUEST PARA LEER BODEGA
			
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
							
					} // FIN ELSE
				}) // FIN .END 
		
	}  // FIN COMPONENT WILL MOUNT
	
	actualizaCantidad(unidades) {
		let nuevaCantidad = 1*unidades + 1*this.state.cantidad 
		this.setState({cantidad: nuevaCantidad })	
	}	
	
    render(){
    
        return(
					
					<div className="container">
						<div className="row">
							<div className="col-lg-12 ">
									<Barrasup cantidad={this.state.cantidad}/>
							</div>
							<div className="col-lg-12">
								<Barrabuscador/>
							</div>
								<div className="col-lg-12">
									<Switch>
				               	<Route exact path='/catalogo' render={()=>{return <Galeria actualizaCantidad={this.actualizaCantidad} datos={this.state.datos}/>}} />
				               	<Route path='/catalogo/carrito' render={()=>{return <Carrito total={this.state.total}  datos={this.state.carrito}/>}} />
               					<Route path='/catalogo/detalle/:id' render={(match)=>{return <Detalle datos={this.state.datos} rutaId={match}/>}} />
				               </Switch>
								</div>
							</div>
						</div>	
					
					
              );
        } // FIN RENDER
        
      } // FIN CLASE

export default Catalogo;