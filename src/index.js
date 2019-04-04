import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";

import Search from './aplicacao/Home/Home.js';
import PerfilUsuario from './aplicacao/PerfilUsuario/PerfilUsuario.js';
import RepositoriosUsuario from './aplicacao/RepositoriosUsuario/RepositoriosUsuario.js'

const routes = (
    <BrowserRouter >
        <Route exact path="/" component={Search}/>
        <Route exact path="/user/:username" component={PerfilUsuario}/>

        <Route path="/user/:username/repos" component={RepositoriosUsuario}/>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));