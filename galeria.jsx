import React from 'react';
import Producto from './producto.jsx'

class galeria extends React.Component{
	constructor(){
		super()
	} // FIN CONSTRUCTOR
	
    render(){
    
        return(
					
					<div className="container">
						<div className="row">
							<div className="col-lg-12 ">
								<div className="contenedor-galeria">
									<Producto />
								</div>
							</div>
						</div>	
					</div>	
					
              );
        } // FIN RENDER
        
      } // FIN CLASE

export default galeria;