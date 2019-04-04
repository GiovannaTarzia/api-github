import React, {Component} from 'react';
import './RepositoriosUsuario.scss';

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