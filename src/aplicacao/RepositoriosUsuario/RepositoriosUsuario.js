import React, {Component} from 'react';
import './RepositoriosUsuario.scss';
import {Link} from "react-router-dom";

class RepositoriosUsuario extends Component {

    constructor() {
        super();
        this.state = {
            repos:[]
        };
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.match.params.username}/repos`)
            .then(response => response.json())
            .then(repos => {this.setState({repos: repos});});
    }


    render() {
        return (
            <div className="RepositoriosUsuario">

                <div className="RepositoriosUsuario-Itens">
                    <Link to={`/user/${this.props.match.params.username}`}>
                        <div className="RepositoriosUsuario-VoltarPerfil">
                            ⬅
                        </div>
                    </Link>
                    {this.state.repos.map((itemRepos, key) => {
                        return <div key={key} className="RepositoriosUsuario-Item">
                            <span className="RepositoriosUsuario-Item-Nome">{itemRepos.name}</span>
                            <span className="RepositoriosUsuario-Item-Descricao">{itemRepos.description}</span>
                            <span className="RepositoriosUsuario-Item-Linguagem">{itemRepos.language}</span>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default RepositoriosUsuario;