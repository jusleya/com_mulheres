import React from 'react';

//Components
import Card     from './Card';

//Images
import Jaine from '../../assets/image/sobre/nos/jaine.jpg';
import Natalia from '../../assets/image/sobre/nos/natalia.jpg';

/*Icones
import {
  FacebookBoxIcon,
  LinkedinBoxIcon,
  InstagramIcon,
  TwitterBoxIcon
} from 'mdi-react';*/

class Colab extends React.Component {
  state = {
    divVerMais: '',
    isOcultar: ''
  };

  setDivVerMais = (verMais) => {
    this.setState({divVerMais: verMais, isOcultar: false});
  }

  render() {
    var styleList = this.state.divVerMais ? 'fadeIn' : 'fadeOut';

    return (
      <div id="nos-children">
        <div className="columns is-centered">
          <Card image={Jaine} name="Jaine Conceição" funcao="Colaboradora" verMais={this.setDivVerMais} descricao="Descrição de Jaine" isOcultar={this.state.isOcultar}/>
          <Card image={Natalia} name="Natália Guimarães" funcao="Coladoradora" verMais={this.setDivVerMais} descricao="Descrição de Natalia" isOcultar={this.state.isOcultar}/>
        </div>
        <div className={styleList}>
          {this.state.divVerMais}
        </div>
      </div>
    );
  }
}

export default Colab;