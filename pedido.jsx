import React from 'react';

class pedido extends React.Component{
	constructor(){
		super()
	} // FIN CONSTRUCTOR
	
    render(){
    
        return(
					
				<div class="row">
							<div class="col-lg-6 contenedor-lista-pedido">
								<div class="row">
									<div class="col-lg-12  contenedor-producto-pedido">
										<div class="row">
											<div class="col-lg-3 contenedor-imagen-pedido">
												<img class="img-responsive" src="./imagenesBase/ajo.jpg" alt="">			
											</div>
											<div class="col-lg-9 contenedor-datos-pedido">
												<h4>Ajo</h4>
												<h6>Unidades: 20</h6>			
											</div>		
										</div>
										<div class="row">
											<div class="col-lg-12 contenedor-subtotal-pedido">
												<h5>Subtotal: $1000</h5>			
											</div>		
										</div>	
									</div>
								</div>
					
              );
        } // FIN RENDER
        
      } // FIN CLASE

export default pedido;