import React from 'react';

//Components
import Card     from './Card';
//Images
import Alana from '../../assets/image/sobre/nos/alana.jpg';
import Jusley from '../../assets/image/sobre/nos/jusley.jpg';
import Sthe from '../../assets/image/sobre/nos/sthe.jpg';
import Veronica from '../../assets/image/sobre/nos/veronica.jpg';
/*Icones
import {
  FacebookBoxIcon,
  LinkedinBoxIcon,
  InstagramIcon,
  TwitterBoxIcon
} from 'mdi-react';*/

//const hr = {border:"1px dashed rgb(189, 203, 216)"};

class Adm extends React.Component {
  state = {
    divVerMais: ''
  };

  setDivVerMais = (verMais) => {
    this.setState({divVerMais: verMais});
  }

  render() {
    var styleList = this.state.divVerMais ? 'fadeIn' : 'fadeOut';

    return (
      <div id="nos-children">
        <div className="columns is-centered">
          <Card image={Alana} name="Alana Lucia" funcao="Administração" verMais={this.setDivVerMais} descricao="Descrição de 1"/>
          <Card image={Jusley} name="Jusley Arley" funcao="Administração" verMais={this.setDivVerMais} descricao="Descrição de 2"/>
          <Card image={Sthe} name="Sthefane Soares" funcao="Administração" verMais={this.setDivVerMais} descricao="Descrição de 3"/>
          <Card image={Veronica} name="Verônica Nascimento" funcao="Administração" verMais={this.setDivVerMais} descricao="Descrição de 4"/>
        </div>
        <div className={styleList}>
          {this.state.divVerMais}
        </div>
      </div>
    );
  }
}

export default Adm;