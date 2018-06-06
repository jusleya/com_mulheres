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
    <div className="columns">
      <Card image={Jusley} name="Jusley Arley" funcao="Administração"/>
      <Card image={Jusley} name="Jusley Arley" funcao="Administração"/>
      <Card image={Jusley} name="Jusley Arley" funcao="Administração"/>
      <Card image={Jusley} name="Jusley Arley" funcao="Administração"/>
    </div>
  </div>
);

export default Colab;