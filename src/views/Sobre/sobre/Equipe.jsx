import React from 'react';

//Componentes
import Adm   from './Administracao';
import Colab from './AdmColab';

//Images
import Alana from '../image/nos/alana.jpg';
import Jusley from '../image/nos/jusley.jpg';
import Sthe from '../image/nos/sthe.jpg';
import Veronica from '../image/nos/veronica.jpg';
import Jaine from '../image/nos/jaine.jpg';
import Natalia from '../image/nos/natalia.jpg';

//CSS
import '../css/equipe.css';

const hr = {border:"1px dashed rgb(189, 203, 216)"};

class Equipe extends React.Component {
  render(){
    return (
      <div id="equipe">
        <div className="container is-centered">
          <p className="titulo">
            Nós
          </p>
          <Adm
            image1={Alana} name1="Alana Lucia" funcao1="Administração"
            image2={Jusley} name2="Jusley Arley" funcao2="Administração"
            image3={Sthe} name3="Sthefane Soares" funcao3="Administração"
          />
          <br/>
          <Colab
            image4={Veronica} name4="Verônica Nascimento" funcao4="Administração"
            image5={Jaine} name5="Jaine Conceição" funcao5="Colaboradora"
            image6={Natalia} name6="Natália Guimarães" funcao6="Colaboradora"
          />
          <hr style={hr} />
        </div>
      </div>
    );
  }
}

export default Equipe;