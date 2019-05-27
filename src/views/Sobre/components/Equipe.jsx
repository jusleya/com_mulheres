import React from 'react';

//Componentes
import Adm   from './Administracao';

//Images
import Alana from '../image/nos/alana.jpg';
import Jusley from '../image/nos/jusley.jpg';
import Natalia from '../image/nos/natalia.jpg';

const hr = {border:"1px dashed rgb(189, 203, 216)"};

class Equipe extends React.Component {
  render(){
    return (
      <div id="equipe">
        <div className="container is-centered">
          <p className="titulo">Nós</p>
          <Adm
            image1={Alana} name1="Alana Lucia" funcao1="Administração"
            image2={Jusley} name2="Jusley Arley" funcao2="Administração"
            image3={Natalia} name3="Natália Guimarães" funcao3="Colaboradora"
          />
          <br />
          <hr style={hr} />
        </div>
      </div>
    );
  }
}

export default Equipe;