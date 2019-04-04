import React, {Component} from 'react';
import './PerfilUsuario.scss';
import {Link} from 'react-router-dom'

class PerfilUsuario extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
            .then(response => response.json())
            .then(user => {
                this.setState({usuario: user});
            });
    }


    render() {
        if (!this.state.usuario) {
            return (<div className="PerfilUsuario loader">CARREGANDO...</div>);
        }

        const user = this.state.usuario;

        const stat = {name: 'Repositórios públicos', url: `/user/${this.props.match.params.username}/repos`};

        return (
            <div className="PerfilUsuario">
                <div className="PerfilUsuario-Info">
                    <Link to={`/`}>
                        <div className="PerfilUsuario-VoltarPerfil">
                            ⬅
                        </div>
                    </Link>
                    <img className="PerfilUsuario-avatar" src={user.avatar_url} alt={`${user.login} avatar`}/>
                    <h3 className="PerfilUsuario-Nome">{user.login}</h3>
                    <span className="PerfilUsuario-Localizacao">{user.location}</span>
                    <p className="PerfilUsuario-Biografia">{user.bio}</p>

                    <div className="PerfilUsuario-Indicadores">
                        <div className="PerfilUsuario-Seguidores">
                            <span className="PerfilUsuario-QtdeSeguidores">{user.followers}</span> Seguidores
                        </div>
                        <div className="PerfilUsuario-Seguindo">
                            <span className="PerfilUsuario-QtdeSeguindo">{user.following}</span>  Seguindo
                        </div>
                    </div>

                    <Link to={stat.url}>
                        <p className="PerfilUsuario-LinkRepositorio">{stat.name}</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default PerfilUsuario;