import React from 'react';
import Producto from './producto.jsx'
import * as request from 'superagent'

function ListaProductos(props) {
  const productos = props.bodega;
  const listItems = productos.map((producto) =>
  
  							<div className="col-lg-3">
								<div className="contenedor-galeria">
								 <Producto producto={producto} actualizaCantidad={props.actualizaCantidad} actualizaCarrito={props.actualizaCarrito} />
									</div>
							</div>
   
      
  );
  return (
    <div >{listItems}</div>
  );
}



class galeria extends React.Component{
	constructor(){
		super()
		this.state = {datos: []	}
		this.actualizaCantidad = this.actualizaCantidad.bind(this)
		this.actualizaCarrito = this.actualizaCarrito.bind(this)
	} // FIN CONSTRUCTOR

	actualizaCantidad(unidades) {
			this.props.actualizaCantidad(unidades)
	}
	
	actualizaCarrito(){
		this.props.actualizaCarrito()	
	}
    render(){
    		
        return(
					
					
						<div className="row">
							<ListaProductos bodega={this.props.datos} actualizaCantidad = {this.actualizaCantidad} actualizaCarrito = {this.actualizaCarrito} />
								
						</div>	
						
					
              );
        } // FIN RENDER
        
        
      } // FIN CLASE

export default galeria;