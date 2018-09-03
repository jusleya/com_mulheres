import React from 'react';

//Components
import Banner    from './components/Banner';
import Button   from '../../components/Button';

//Image
import nos from './image/comMulheres.png';
import eventos from './image/eventos.jpg';
import parceiros from './image/parceiros.png';

//CSS
import './css/style.css';

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
              <div align="center"><Button type="" link="/sobre">Nos conheça<i className="material-icons">keyboard_arrow_right</i></Button></div>
            </div>
            <div className="column is-6 paddingLeft-comMulheres">
              <img className="imagem" src={nos} alt="" />
            </div>
          </div>

          <hr style={hr}/>

          <div className="columns is-centered">
            <div className="column is-6">
              <img className="imagem paddingTop-eventos-foto" src={eventos} alt="" />
            </div>
            <div className="column is-5">
              <p className="titulo paddingTop-eventos">Eventos e Palestras</p>
              <br/>
              <p className="text">
                Realizamos eventos independentes e com grupos parceiros, como também somos convidadas para palestrar em eventos da área aqui em Sergipe e em outros estados. Isso nos permite ficar mais próximas do nosso público e compartilhar nossas experiências na área e/ou na vida acadêmica. 
                Para ter uma palestra nossa no seu evento, entre em <strong><a href="/contato" target="_blank" rel="noopener noreferrer">contato</a></strong>.
              </p>
              <br/>
              <div align="center"><Button type="" disabled>Em breve</Button></div>
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
              <div align="center"><Button type="" link="/contato">Entre em contato<i className="material-icons">keyboard_arrow_right</i></Button></div>
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