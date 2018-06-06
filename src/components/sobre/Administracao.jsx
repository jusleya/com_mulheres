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

//const hr = {border:"1px dashed rgb(189, 203, 216)"};

const Adm = () => (
  <div id="adm">
    <div className="columns is-centered">
      <Card image={Jusley} name="Alana Lucia" funcao="Administração"/>
      <Card image={Jusley} name="Jusley Arley" funcao="Administração"/>
      <Card image={Jusley} name="Sthefane Soares" funcao="Administração"/>
      <Card image={Jusley} name="Verônica" funcao="Administração"/>
    </div>
  </div>
);

export default Adm;