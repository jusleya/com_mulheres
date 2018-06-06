import React from 'react';

//Components
import Card     from './Card';

//Images
import Jusley from '../../assets/image/sobre/nos/jusley.jpeg';

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
      <Card image={Jusley} name="Jaine Conceição" funcao="Colaboradora"/>
      <Card image={Jusley} name="Natália" funcao="Coladoradora"/>
    </div>
  </div>
);

export default Colab;