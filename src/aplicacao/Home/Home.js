import React, {Component} from 'react';
import './Home.scss';
import iconUser from "./IconUser.svg";
import {Link} from 'react-router-dom'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state={
            inputPesquisa:'',
        };
    }

    changeInput = (e) =>{
      this.setState({inputPesquisa: e.target.value})
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.props.history.push(`/user/${this.state.inputPesquisa}`)
        }
    };

  render() {
    return (
      <div className="Home">
          <div className="Topo">GitHub</div>
          <div className="Conteudo">
              <div className="CampoInput">
                  <img src={iconUser} className="ImgUser" alt={"Nome do usuário"}/>
                  <input placeholder="Nome do usuário" className="InputPesquisa" onChange={(e) => this.changeInput(e)}
                         onKeyPress={this.handleKeyPress}/>
              </div>
              <Link to={`/user/${this.state.inputPesquisa}`}>
                  <button className="BotaoPesquisar" onClick={() => this.setState({inputPesquisa: ''})}
                          onKeyPress={this.handleKeyPress}>
                      Pesquisar
                  </button>
              </Link>
          </div>
      </div>
    );
  }
}

export default Home;