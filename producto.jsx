import React from 'react';
import { Link} from 'react-router-dom';
import * as request from 'superagent';

class producto extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {ruta: '', cantidad: 0}
		this.actualizaCantidad = this.actualizaCantidad.bind(this)
		this.escribirCarrito = this.escribirCarrito.bind(this)
	} // FIN CONSTRUCTOR
	
	componentWillMount() {
		let url = '/catalogo/detalle/' +  this.props.producto.nombre
		this.setState({ruta: url})	
	}
	shouldComponentUpdate(next_props,next_states) {
		
		if (next_props.producto.nombre != this.state.ruta.substr(18)) {
			let url = '/catalogo/detalle/' + next_props.producto.nombre
			this.setState({ruta: url})
		}
		return true
	}
	actualizaCantidad(event)  {
					this.setState({cantidad: event.target.value})        
	        } // FIN ACTUALIZA CANTIDAD
	        
   escribirCarrito () { 
   	if (this.state.cantidad) {
   		if (this.state.cantidad<=this.props.producto.disponible) {
		let nombre = this.props.producto.nombre,
							unidades = this.state.cantidad,
							subtotal = this.state.cantidad * this.props.producto.precio,
							imagen = this.props.producto.imagen			
		let productoCarrito = {imagen: imagen, nombre: nombre, unidades: unidades, subtotal: subtotal }	
		
		request 
				.post('https://tienda-57b3d.firebaseio.com/usuarios/0/carrito/.json')
				.set('Content-Type': 'application/json')
				.send(JSON.stringify(productoCarrito)
				
				) // FIN .SEND 
				.end((err,res)=>{
					 if (err || !res.ok) {
						console.log('Error en la escritura', err)							 
					 } else {
						console.log('Escritura correcta')
						this.props.actualizaCantidad(unidades)
						this.props.actualizaCarrito()							 
					 }
				
				}) // FIN .END
			// FIN REQUEST				
				
			} // FIN IF COMPARACION CANTIDAD CON DISPONIBLE
			else {
				alert('La cantidad es mayor a los productos disponibles')
			}
		} // FIN IF
	} // FIN ESCRIBIR CARRITO	
	
    render(){
    	
        return(
					
					<div className="container contenedor-producto" >
						<div className="row">
							<div className="col-lg-12">
								<img  className=" center-block imagen-producto" src={this.props.producto.imagen} alt=""/>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<span className="texto-nombre-producto">{this.props.producto.nombre}</span>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5 ">
								<span className="texto-producto">Precio: </span>
							</div>
							<div className="col-lg-2 ">
								<span className="texto-producto">{this.props.producto.precio}</span>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5 ">
								<span className="texto-producto">Disponible: </span>
							</div>
							<div className="col-lg-2 ">
								<span className="texto-producto">{this.props.producto.disponible}</span>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-3">
								<Link to={this.state.ruta} className="btn btn-info btn-sm">ver mas</Link>
							</div>
							<div className="col-lg-3">
								<button className="btn btn-submit btn-sm" type="button" onClick={this.escribirCarrito}>Añadir</button>
							</div>
							<div className="col-lg-4 ">
								<div className="input-group">
							      <input type="number" className="form-control input-sm" onChange = {this.actualizaCantidad} min="1" max="99"/>			      
						    </div>
							</div>
						</div>
					</div>					
					
              );
        } // FIN RENDER
        
       
		
		
      } // FIN CLASE
      
		
export default producto;