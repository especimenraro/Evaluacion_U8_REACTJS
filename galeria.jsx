import React from 'react';
import Producto from './producto.jsx'
import * as request from 'superagent'

function ListaProductos(props) {
  const productos = props.bodega;
  const listItems = productos.map((producto) =>
  
  							<div className="col-lg-3">
								<div className="contenedor-galeria">
								 <Producto producto={producto} />
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
							
					} // FIN ELSE
				}) // FIN .END 
	} // FIN COMPONENT WILL MOUNT
	
	componentWillUpdate(next_props,next_states) {
		
	}

    render(){
    		
        return(
					
					<div className="container">
						<div className="row">
							<ListaProductos bodega={this.state.datos} />
								
						</div>	
					</div>	
					
              );
        } // FIN RENDER
        
        
      } // FIN CLASE

export default galeria;