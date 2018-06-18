import React from 'react';

//Componentes
import Button from '../general/Button';

//CSS
import '../assets/styles/pages/contato.css';

class Contato extends React.Component {
  render(){
    return(
      <div id="contato"> 
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Contato;