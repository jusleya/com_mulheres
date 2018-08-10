import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Image
import lampada from './image/lampada.png';

//CSS
import './css/style.css';

class PageNotFound extends Component {
  render() {
    return (
      <div id="emBreve">
        <div className="hero is-large is-gradient">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <div className="column is-1"></div>
                <div className="column is-2">
                  <img src={lampada} alt=""/>
                </div>
                <div className="column padding">
                  <h1 className="title">Em breve...</h1>
                  <h2 className="sub-title">A página solicitada está em construção.</h2>
                  <br />
                  <Link className="button is-info is-inverted" to="/">Voltar para a página inicial</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;