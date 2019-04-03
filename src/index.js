import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import Search from './aplicacao/Home';
import PerfilUsuario from './aplicacao/PerfilUsuario';
import RepositoriosPerfil from './aplicacao/RepositoriosPerfil'

const routes = (
    <BrowserRouter >
        <Route exact path="/" component={Search}/>
        <Route exact path="/user/:username" component={PerfilUsuario}/>

        <Route path="/user/:username/repos" component={RepositoriosPerfil}/>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));