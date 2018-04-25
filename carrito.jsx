import React from 'react';

class carrito extends React.Component{
	constructor(){
		super()
	} // FIN CONSTRUCTOR
	
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
						<div className="row">
							<div className="col-lg-6 contenedor-lista-pedido">
								<div className="row">
									<div className="col-lg-12  contenedor-producto-pedido">
										<div className="row">
											<div className="col-lg-3 contenedor-imagen-pedido">
												<img className="img-responsive" src="./imagenesBase/ajo.jpg" alt="" />			
											</div>
											<div className="col-lg-9 contenedor-datos-pedido">
												<h4>Ajo</h4>
												<h6>Unidades: 20</h6>			
											</div>		
										</div>
										<div className="row">
											<div className="col-lg-12 contenedor-subtotal-pedido">
												<h5>Subtotal: $1000</h5>			
											</div>		
										</div>	
									</div>
								</div>
								
								<div className="row">
									<div className="col-lg-12  contenedor-producto-pedido">
										<div className="row">
											<div className="col-lg-3 contenedor-imagen-pedido">
												<img className="img-responsive" src="./imagenesBase/ajo.jpg" alt=""/>			
											</div>
											<div className="col-lg-9 contenedor-datos-pedido">
												<h4>Ajo</h4>
												<h6>Unidades: 20</h6>			
											</div>		
										</div>
										<div className="row">
											<div className="col-lg-12 contenedor-subtotal-pedido">
												<h5>Subtotal: $1000</h5>			
											</div>		
										</div>	
									</div>
								</div>
								
								
							</div>
							<div className="col-lg-5 col-lg-offset-1 contenedor-total">
								<div className="row">
									<div className="col-lg-12">
										<h4 className="total">Total: $1000</h4>	
									</div>				
								</div>
								<div className="row">
									<div className="col-lg-3">
										<button className="btn btn-danger boton-cancelar">Cancelar</button>
									</div>	
									<div className="col-lg-3">
										<button  className="btn btn-succes boton-pagar">Pagar</button>
									</div>				
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