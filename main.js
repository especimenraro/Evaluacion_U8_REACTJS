import React from 'react';
import  ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import App from './app.jsx';
import Inicio from './inicio.jsx'
import Catalogo from './catalogo.jsx'

render(
	<BrowserRouter>
		<App/>	
	</BrowserRouter>,
	document.getElementById('app')
)

