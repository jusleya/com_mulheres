import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//CSS
import './css/style.css';

class PageNotFound extends Component {
  render() {
    return (
      <div id="page404">
        <div className="hero is-large is-gradient">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Página não encontrada...</h1>
              <h2 className="sub-title">A página solicitada não existe ou está em construção.</h2>
              <br />
              <Link className="button is-info is-inverted" to="/">Voltar para a página inicial</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;