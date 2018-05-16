import React from 'react';
import { Link} from 'react-router-dom';

import * as request from 'superagent';

class inicio extends React.Component{
	constructor(){
		super()
		this.state = {usuarios: [], user:'',pass:''}
		this.verificaLogin = this.verificaLogin.bind(this)
		this.getLogin = this.getLogin.bind(this)
		this.getPass = this.getPass.bind(this)
	} // FIN CONSTRUCTOR
	
	
	getLogin(event) {
		this.setState({user: event.target.value})	
	}
	getPass(event) {
		this.setState({pass: event.target.value})	
	}
	verificaLogin(){
		this.props.verificaLogin(this.state.user,this.state.pass )
	}
    render(){
    
        return(
        
         <div className="container" >
				<div className="row">
			      <div className="col-lg-offset-3 col-lg-6  login-container">
			      	<div className=" login-container">
			      		<h4 className="titulo-login">Inicia sesión</h4>
			          <form className="form-horizontal" method='post'>
			            <div className="form-group">
			            
			            <div className="col-lg-offset-2 col-lg-3">
			            	<label>Usuario</label>	
			            </div>
			           		
			           		<div className="col-lg-5">
			           			<input type="text" id="user" required name="user" onChange={this.getLogin}/>
			           		</div>	              
					         
					        </div>    
			              <div className="form-group">
			              	    
			            <div className="col-lg-offset-2 col-lg-3">
			            	<label>Contraseña</label>	
			            </div>
			           		
			           		<div className="col-lg-5">
			           			<input type="password" id="pass" required name="pass" onChange={this.getPass}/>
			           		</div>	              
					         
					         
					        </div>
					        <div className="form-group">
			              	<div className="row">
									<div className=" col-lg-offset-5 col-lg-2">
										 <button className="btn btn-default" type="submit" onClick={this.verificaLogin}>Enviar</button>
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