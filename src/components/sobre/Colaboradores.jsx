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

const Colab = () => (
  <div id="colab">
    <div className="columns is-centered">
      <Card image={Jaine} name="Jaine Conceição" funcao="Colaboradora"/>
      <Card image={Natalia} name="Natália Guimarães" funcao="Coladoradora"/>
    </div>
  </div>
);

export default Colab;