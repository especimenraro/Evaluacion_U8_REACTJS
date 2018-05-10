import React from 'react';
import * as request from 'superagent';
import { Link} from 'react-router-dom';

function ListaProductos(props) {
  const productos = props.carrito;
  var template=[]
  for (let key in productos) {
		template.push(productos[key])  
  }
  const listItems = template.map((producto) =>
  
  							<div className="row">
									<div className="col-lg-12  contenedor-producto-pedido">
										<div className="row">
											<div className="col-lg-3 contenedor-imagen-pedido">
												<img className="img-responsive" src={producto.imagen} alt=""/>			
											</div>
											<div className="col-lg-9 contenedor-datos-pedido">
												<h4>{producto.nombre}</h4>
												<h6>Unidades: {producto.unidades}</h6>			
											</div>		
										</div>
										<div className="row">
											<div className="col-lg-12 contenedor-subtotal-pedido">
												<h5>Subtotal: ${producto.subtotal}</h5>			
											</div>		
										</div>	
									</div>
								</div>
      
  );
  return (
    <div >{listItems}</div>
  );
}

class carrito extends React.Component{
	constructor(){
		super()
		this.state = {datos: [], total: 0}
	} // FIN CONSTRUCTOR
	
	componentWillMount() {
		var subtotal = 0
		request
			.get('https://tienda-57b3d.firebaseio.com/usuarios/0/carrito/.json')
			.set('Content-Type': 'application/json')
			.end((err,res)=>{
				if (err || !res.ok) {
					console.log('Error en la comunicacion:' + err.message)				
				}
				else {
					this.setState({
						datos: res.body					
					})		
					for (let key in this.state.datos) {
								subtotal += this.state.datos[key].subtotal			
								
					}
					this.setState({total: subtotal})
					
				}
			}) // FIN .END
	}
	
	
    render(){
    
        return(
					
				<div className="container">
					<div className="row">
					<div className="col-lg-12 contenedor-carrito">
						<div className="row">
							<div className="col-lg-12">
								<h2>Carrito de compras</h2>
							</div>		
						</div>
														
						<ListaProductos carrito={this.state.datos}/>
								
							
							<div className="col-lg-5 col-lg-offset-1 contenedor-total">
								<div className="row">
									<div className="col-lg-12">
										<h4 className="total">Total: ${this.state.total}</h4>	
									</div>				
								</div>
								<div className="row">
									<div className="col-lg-3">
										<Link to="/catalogo" className="btn btn-danger boton-cancelar">Cancelar</Link>
									</div>	
									<div className="col-lg-3">
										<button  className="btn btn-succes boton-pagar" >Pagar</button>
									</div>				
								</div>
							</div>		
							
						</div>	
					</div>
				</div>
				
					
              );
        } // FIN RENDER
        
      } // FIN CLASE

export default carrito;