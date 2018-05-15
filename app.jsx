import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Redirect} from 'react-router'
import Inicio from './inicio.jsx';
import Catalogo from './catalogo.jsx';
import * as request from 'superagent';

class App extends React.Component{

constructor(){
super()
this.state = {usuarios: [], loginOK: false}
this.verificaLogin = this.verificaLogin.bind(this)
this.logout = this.logout.bind(this)
} // FIN CONSTRUCTOR
componentWillMount() {
		request
			.get('https://tienda-57b3d.firebaseio.com/usuarios/.json')	
			.set('Content-Type':'application/json')
			.end((err,res)=>{
				if (err || !res.ok) {
					console.log('Error en la comunicacion:' + err.message)				
				}
				else {
					
					this.setState({usuarios: res.body})
					
				}
			}) // FIN .END
	
	}
	logout(){
		this.setState({loginOK: false})
	}
verificaLogin(user,pass){
	
		for (let key in this.state.usuarios) {
				if (user==this.state.usuarios[key].nombre) {
								if (pass==this.state.usuarios[key].pass) {
					
									this.setState({loginOK:true})
									return
								}
					}
		}
		alert('Usuario o contraseña incorrecta')
	}
	
    render(){
        return(
        <Router>
            <div>
	            <Switch>
               	<Route exact path='/' render={()=>{return !this.state.loginOK ? ( <Inicio verificaLogin={this.verificaLogin}/>) : (<Redirect from='/' to='/catalogo'/>)}} />
   					<Route path='/catalogo' render={()=>{return <Catalogo logout={this.logout }/>} }/>
               	
               </Switch>
              </div>
            </Router> 
              
            );
        } // FIN RENDER
        
        
      } // FIN CLASE

export default App;
