import React from 'react';
import  ReactDOM from 'react-dom';
import {render} from 'react-dom';
import {Router,browserHistory, Route, Link} from 'react-router';
import App from './app.jsx';
import Inicio from './inicio.jsx'
import Catalogo from './catalogo.jsx'

render(
	
		<App/>	
	,
	document.getElementById('app')
)

