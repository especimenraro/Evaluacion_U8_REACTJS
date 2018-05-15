import React from 'react';

class barrabuscador extends React.Component{
	constructor(){
		super()
		this.state = {datos: []}
		this.filtrar = this.filtrar.bind(this)
	} // FIN CONSTRUCTOR
	
	filtrar (event) {
			var filtro = event.target.value,
						datosFiltrados = [],
						longitudFiltro = event.target.value.length
			if (filtro.length) {
				for (let key in this.props.datos) {
						if (this.props.datos[key].nombre.substr(0,longitudFiltro)==filtro) {
							datosFiltrados.push(this.props.datos[key])						
						}
				}
				if (!datosFiltrados.length) { datosFiltrados = [{nombre: 'No Encontrado', precio: 0, disponible: 0, imagen:'', descripcion:''}]}
			} else {
				datosFiltrados = []
			}
			
	 	this.props.filtrar(datosFiltrados)
		
	}// FIN FILTRAR
    render(){
    
        return(
        
       
				<div className="row">
				<div className="col-lg-12">
				<nav className="navbar navbar-default">
					  <div className="container-fluid">
					    <div className="navbar-header">
					      <span className="navbar-brand">Catalogo de Productos</span>
					    </div>
					    <div className="nav navbar-nav navbar-right">
					    	<div className="input-group">
					    		<span className="input-group-addon"><i className="fi-magnifying-glass"></i></span>
								<input type="text" className="form-control" onChange={this.filtrar}/>
					    	</div>
							
						</div>
					  </div>
				</nav>
				</div>
				
				
				</div>
				
				
              );
        } // FIN RENDER
        
      } // FIN CLASE

export default barrabuscador;