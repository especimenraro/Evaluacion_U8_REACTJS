import React from 'react';
import { Link} from 'react-router-dom';
class inicio extends React.Component{
	constructor(){
		super()
	} // FIN CONSTRUCTOR
	
    render(){
    
        return(
        
         <div className="container" >
				<div className="row">
			      <div className="col-lg-offset-3 col-lg-6  login-container">
			      	<div className=" login-container">
			      		<h4 className="titulo-login">Inicia sesión</h4>
			          <form className="form-horizontal">
			            <div className="form-group">
			            
			            <div className="col-lg-offset-2 col-lg-3">
			            	<label>Usuario</label>	
			            </div>
			           		
			           		<div className="col-lg-5">
			           			<input type="text" id="user" required name="user"/>
			           		</div>	              
					         
					        </div>    
			              <div className="form-group">
			              	    
			            <div className="col-lg-offset-2 col-lg-3">
			            	<label>Contraseña</label>	
			            </div>
			           		
			           		<div className="col-lg-5">
			           			<input type="text" id="user" required name="user"/>
			           		</div>	              
					         
					         
					        </div>
					        <div className="form-group">
			              	<div className="row">
									<div className=" col-lg-offset-5 col-lg-2">
										 <Link className="btn btn-default" to='/catalogo'>Enviar</Link>
									</div>              	
			              	</div>
			               </div>
			              
			          </form>
			         
			      	</div>
			      </div>
			</div>
			</div>
            
            );
        } // FIN RENDER
        
      } // FIN CLASE

export default inicio;