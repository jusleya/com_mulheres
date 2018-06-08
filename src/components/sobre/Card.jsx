import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    verMais: false
  };

  handleClick = () => {
    if(this.state.verMais) {
      this.setState({ verMais: false });
      this.props.verMais('');
    } else {
      this.setState({ verMais: true });
      this.props.verMais(this.props.descricao);
    }
  }

  render() {
    const {...props} = this.props;
    return (
      <div className="column">
        <div id="card">
          <div className="box-card">
            <img className="imagem" src={props.image} alt=""/>
            <p className="name">{props.name}</p>
            <p className="funcao">{props.funcao}</p>
            <div className="ver-mais">
              <a onClick={this.handleClick}>
                {this.state.verMais ? 'Menos' : 'Ver Mais'}
                {props.isOcultar & this.state.verMais ? 
                  <i className="material-icons">keyboard_arrow_up</i> :
                  <i className="material-icons">keyboard_arrow_down</i>
                }
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;

//982px