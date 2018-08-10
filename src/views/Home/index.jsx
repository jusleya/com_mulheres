import React from 'react';

//Components
import Banner    from './home/Banner';
import Button   from '../../components/Button';

//Image
import nos from './image/comMulheres.png';
import eventos from './image/eventos.jpg';
import parceiros from './image/parceiros.png';

//CSS
import './css/home.css';

const hr = {border:"1px dashed rgb(189, 203, 216)"};

const Home = () => (
  <div id="home">
    <Banner />
    <div id="conteudo">
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5">
              <p className="titulo paddingTop-comMulheres">COM² Mulheres</p>
              <br/>
              <p className="text">Criado em junho de 2017, somos um grupo de seis mulheres que desejam a inclusão de mais mulheres na área de computação. Queremos igualdade, pois não é o nosso gênero que define se somos capazes de programar.</p>
              <br/>
              <br/>
              <div align="center"><Button link="/sobre">Nos conheça<i className="material-icons">keyboard_arrow_right</i></Button></div>
            </div>
            <div className="column is-6 paddingLeft-comMulheres">
              <img className="imagem" src={nos} alt="" />
            </div>
          </div>

          <hr style={hr}/>

          <div className="columns is-centered">
            <div className="column is-6">
              <img className="imagem" src={eventos} alt="" />
            </div>
            <div className="column is-5">
              <p className="titulo paddingTop-eventos">Eventos</p>
              <br/>
              <p className="text">Eventualmente realizamos eventos independentes ou com grupos parceiros que nos permite ficar mais próximos do nosso público compartilhando nossas experiências na área e/ou na vida acadêmica.</p>
              <br/>
              <br/>
              <div align="center"><Button disabled>Em breve</Button></div>
            </div>
          </div>

          <hr style={hr}/>

          <div className="columns is-centered paddingBottom">
            <div className="column is-5">
              <p className="titulo paddingTop-parceiros">Parceiros</p>
              <br/>
              <p className="text">Queremos juntar pessoas/grupos que tenham objetivos semelhantes ao nosso para nos tornarmos uma comunidade mais forte. Quer ser um parceiro ou ser um colaborador com nossa página?</p>
              <br/>
              <br/>
              <div align="center"><Button link="/contato">Entre em contato<i className="material-icons">keyboard_arrow_right</i></Button></div>
            </div>
            <div className="column is-6 paddingLeft-parceiros">
              <img className="imagem" src={parceiros} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;