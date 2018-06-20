import React from 'react';

//Componentes
import Button from '../general/Button';

//Imagem
import xicara from '../assets/image/contato/xicara.png';

//CSS
import '../assets/styles/pages/contato.css';

class Contato extends React.Component {
  render(){
    return(
      <div id="contato"> 
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <p className="titulo">Entre em contato</p>
                <div className="box-contato">
                  <div className="field is-horizontal espaco top">
                    <div className="field-label is-normal">
                      <label className="label">Nome</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input className="input" type="text" placeholder="Nome"/>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal espaco">
                    <div className="field-label is-normal">
                      <label className="label">E-mail</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input className="input" type="text" placeholder="E-mail"/>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal espaco">
                    <div className="field-label is-normal">
                      <label className="label">Assunto</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <input className="input" type="text" placeholder="Assunto"/>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field is-horizontal espaco">
                    <div className="field-label is-normal">
                      <label className="label">Mensagem</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <p className="control">
                          <textarea className="textarea" placeholder="Mensagem..."></textarea>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <div className="button-espaco"><Button link="">Enviar</Button></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className="columns">
              <div className="column is-2"></div>
              <div className="column box-posicao" align="right">
                <div className="box-texto">
                  <p className="texto">
                    Oi, tudo bem? Quer conversar ou fazer parceria com a gente? Nós do <strong>COM² Mulheres</strong> vamos adorar ler seu e-mail. É só preencher o formulário que entraremos em contato em breve.
                    <br/>
                    Ou se preferir, você pode nos encontrar no <strong><a href="https://www.instagram.com/com.mulheres/">Instagram</a></strong>, <strong><a href="https://www.facebook.com/com2mulheres/">Facebook</a></strong> ou no e-mail: <strong><a href="">com.mulheres@gmail.com</a></strong>.
                  </p>
                  {/* Oi, tudo bem? Meu nome é Jusley e queria te dizer que vou adorar ler seu e-mail. Quer conversar sobre algum novo projeto? Ou quer saber mais sobre o nosso projeto? Ou quer fazer parceria com a gente? É só preencher o formulário abaixo que entraremos em contato em breve.
                    <br/>
                    Se preferir, você pode nos encontrar no instagram, facebook ou no e-mail: com.mulheres@gmail.com.*/}
                </div>
              </div>
              <div className="column is-2 imagem">
                <img src={xicara} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contato;