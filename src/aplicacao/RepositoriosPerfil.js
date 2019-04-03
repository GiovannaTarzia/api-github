import React, { Component } from 'react';
import './RepositoriosPerfil.scss';

class RepositoriosPerfil extends Component {

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
            <div className="RepositoriosPerfil">
                {this.state.repos.map((itemRepos, key) => {
                    return <div key={key}>
                        {itemRepos.name}
                        {itemRepos.description}
                        {itemRepos.language}
                    </div>
                })}

            </div>
        );
    }
}

export default RepositoriosPerfil;