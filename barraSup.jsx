import React from 'react';
import { Link} from 'react-router-dom';
import ReactDOM from 'react-dom'

class barrasup extends React.Component{
	
	constructor(){
		super()
		this.state = {cantidad: 0}
		
	} // FIN CONSTRUCTOR
	
		
    render(){
    
        return(
					
					<div className="navbar navbar-default">
					 
					    <div className="navbar-header">
					    
					      <span className="navbar-brand">
					        La Bodeguita
					      </span>
					      
					    </div>
					    <ul className="nav navbar-nav navbar-right">
							<li className="icono"><Link to='/catalogo' ><i className="fi-thumbnails"></i></Link></li>
							<li className="icono"><Link to='/catalogo/carrito'><i className="fi-shopping-cart "></i><span  className="icono" id="icono-cantidad">{this.props.cantidad}</span></Link></li>
							<li className="icono"><Link to='/' onClick={this.props.logout}><i className="fi-arrow-right"></i></Link></li>
						</ul>
					  
				</div>
				
				
              );
        } // FIN RENDER
        
        componentWillUpdate(nuevoEstado,anteriorEstado) {
        
				var iconoCantidad = document.getElementById('icono-cantidad')
				
				if (nuevoEstado.cantidad>0) {
					ReactDOM.findDOMNode(iconoCantidad).style.backgroundColor = 'red'
					ReactDOM.findDOMNode(iconoCantidad).style.color = 'white'
					ReactDOM.findDOMNode(iconoCantidad).style.borderRadius = '3px 3px'
				} 
				else {
				ReactDOM.findDOMNode(iconoCantidad).style.backgroundColor = 'transparent'
				ReactDOM.findDOMNode(iconoCantidad).style.color = 'black'
				ReactDOM.findDOMNode(iconoCantidad).style.borderRadius = '0px 0px'
				} 
				
			} // FIN COMPONENT WILL UPDATE
			
      } // FIN CLASE

export default barrasup;