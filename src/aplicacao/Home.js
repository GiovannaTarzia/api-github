import React, { Component } from 'react';
import './Home.scss';
import iconUser from "./IconUser.svg";
import { Link } from 'react-router-dom'

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

  render() {
    return (
      <div className="Home">
              <div className="Topo">GitHub</div>
              <div className="Conteudo">
                  <div className="CampoInput">
                      <img   src={iconUser} className="ImgUser"/>
                      <input placeholder="Username" className="InputPesquisa" onChange={(e) => this.changeInput(e)}/>
                  </div>
                  <Link to={`/user/${this.state.inputPesquisa}`}>
                      <button className="BotaoPesquisar" onClick={() => this.setState({inputPesquisa:''})} >Pesquisar</button>
                  </Link>
              </div>
      </div>
    );
  }
}

export default Home;
