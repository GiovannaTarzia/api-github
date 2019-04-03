import React, { Component } from 'react';
import './PerfilUsuario.scss';
import { Link } from 'react-router-dom'

class PerfilUsuario extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
            .then(response => response.json())
            .then(user => {this.setState({user: user});});
    }

    renderStat(stat) {
        return (
            <li key={stat.name} className="user-info__stat">
                <Link to={stat.url}>
                    <p className="user-info__stat-value">{stat.value}</p>
                    <p className="user-info__stat-name">{stat.name}</p>
                </Link>
            </li>
        );
    }


    render() {
        // If the state doesn't have a user key, it means the AJAX didn't complete yet. Simply render a LOADING indicator.
        if (!this.state.user) {
            return (<div className="PerfilUsuario loader">LOADING...</div>);
        }

        // If we get to this part of `render`, then the user is loaded
        const user = this.state.user;

        // Gather up some number stats about the user, to be used in a map below
        const stat = {name: 'Repositórios', url: `/user/${this.props.match.params.username}/repos`};


        return (
            <div className="PerfilUsuario">
                <div className="PerfilUsuario-Info">
                        <img className="PerfilUsuario-avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                        <h3 className="user-info__title">{user.login}</h3>
                        <span className="user-info__bio">{user.location}</span>
                        <p className="user-info__bio">{user.bio}</p>

                        <div className="PerfilUsuario-Indicadores">
                            <div className="PerfilUsuario-Seguidores">
                                <span className="PerfilUsuario-QtdeSeguidores">{user.followers}</span> Seguidores
                            </div>
                            <div className="PerfilUsuario-Seguindo">
                                <span className="PerfilUsuario-QtdeSeguindo">{user.following}</span>  Seguindo
                            </div>
                        </div>


                        <Link to={stat.url}>
                            <p className="user-info__stat-name">{stat.name}</p>
                        </Link>
                </div>
            </div>
        );
    }
}

export default PerfilUsuario;
