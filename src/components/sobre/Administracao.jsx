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

const Adm = () => (
  <div id="adm">
    <div className="columns is-centered">
      <Card image={Alana} name="Alana Lucia" funcao="Administração"/>
      <Card image={Jusley} name="Jusley Arley" funcao="Administração"/>
      <Card image={Sthe} name="Sthefane Soares" funcao="Administração"/>
      <Card image={Veronica} name="Verônica Nascimento" funcao="Administração"/>
    </div>
  </div>
);

export default Adm;