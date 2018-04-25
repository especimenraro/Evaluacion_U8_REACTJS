import React from 'react';
import { Link} from 'react-router-dom';

class producto extends React.Component{
	constructor(){
		super()
	} // FIN CONSTRUCTOR
	
    render(){
    
        return(
					
					<div className="container contenedor-producto" >
						<div className="row">
							<div className="col-lg-12">
								<img  className="img-responsive center-block" src="./imagenesBase/ajo.jpg" alt=""/>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<span className="texto-nombre-producto">Ajo</span>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5 ">
								<span className="texto-producto">Precio: </span>
							</div>
							<div className="col-lg-2 ">
								<span className="texto-producto">100</span>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5 ">
								<span className="texto-producto">Disponible: </span>
							</div>
							<div className="col-lg-2 ">
								<span className="texto-producto">60</span>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-5">
								<Link to='/catalogo/detalle' className="btn btn-info">ver mas</Link>
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