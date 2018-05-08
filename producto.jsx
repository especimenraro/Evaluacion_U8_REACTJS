import React from 'react';
import { Link} from 'react-router-dom';

class producto extends React.Component{
	constructor(){
		super()
		this.state = {ruta: ''}
	} // FIN CONSTRUCTOR
	componentWillMount() {
		let url = '/catalogo/detalle/' +  this.props.producto.nombre
		this.setState({ruta: url})	
	}
    render(){
    
        return(
					
					<div className="container contenedor-producto" >
						<div className="row">
							<div className="col-lg-12">
								<img  className=" center-block imagen-producto" src={this.props.producto.imagen} alt=""/>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<span className="texto-nombre-producto">{this.props.producto.nombre}</span>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5 ">
								<span className="texto-producto">Precio: </span>
							</div>
							<div className="col-lg-2 ">
								<span className="texto-producto">{this.props.producto.precio}</span>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5 ">
								<span className="texto-producto">Disponible: </span>
							</div>
							<div className="col-lg-2 ">
								<span className="texto-producto">{this.props.producto.disponible}</span>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5">
								<Link to={this.state.ruta} className="btn btn-info">ver mas</Link>
							</div>
							<div className="col-lg-3">
								<button className="btn btn-submit">Añadir</button>
							</div>
							<div className="col-lg-4 ">
								<div className="input-group">
							      <input type="number" className="form-control" min="1" max="99"/>			      
						    </div>
							</div>
						</div>
					</div>					
					
              );
        } // FIN RENDER
        
      } // FIN CLASE

export default producto;