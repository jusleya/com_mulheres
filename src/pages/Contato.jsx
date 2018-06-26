import React from 'react';
import {Button} from 'bloomer';
import SimpleReactValidator from 'simple-react-validator';
import axios from 'axios';

//Icones
import { CheckCircleIcon, CloseCircleIcon, CubeSendIcon } from 'mdi-react';

//Imagem
import xicara from '../assets/image/contato/xicara.png';

//CSS
import '../assets/styles/pages/contato.css';

class Contato extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: props.form || {name: '', subject: '', message: ''},
      answer: ''
    };

    this.validator = new SimpleReactValidator();
  }

  handleFormChange = (e) => {
    const {name, value} = e.target;
    this.setState({form:{...this.state.form, [name]: value}})
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({answer: ""});

    if(!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
      return;
    }

    this.setState({answer: [<CubeSendIcon />, "Enviando mensagem..."]});

    axios.post("", {
      name: this.state.form.name,
      email: this.state.form.email,
      subject: this.state.form.subject,
      message: this.state.form.message
    })
    .then((response) => {
      this.setState({answer:[<CheckCircleIcon/>, "Sua mensagem foi enviada com sucesso!"]});
    })
    .catch((error) => {
      this.setState({answer: [<CloseCircleIcon/>, "Ops! Ocorreu algum erro ao enviar a mensagem. Por favor, tente novamente."]})
    });
  }

  render(){
    const {form} = this.state;
    return(
      <div id="contato"> 
        <div className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <p className="titulo">Entre em contato</p>
                <div className="box-contato">
                  <form onSubmit={this.handleSubmit}>
                    <div className="field is-horizontal espaco top">
                      <div className="field-label is-normal">
                        <label className="label">Nome</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <p className="control">
                            <input
                              name="name"
                              className="input"
                              type="text"
                              placeholder="Nome"
                              value={form.name}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('name', form.name, 'required', false, {default: "Campo obrigatório"})}</span>
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
                            <input
                              name="email"
                              className="input"
                              type="email"
                              placeholder="E-mail"
                              value={form.email}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('email', form.email, 'required', false, {default: "Campo obrigatório"})}</span>
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
                            <input
                              name="subject"
                              className="input"
                              type="text"
                              placeholder="Assunto"
                              value={form.subject}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('subject', form.subject, 'required', false, {default: "Campo obrigatório"})}</span>
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
                            <textarea
                              name="message"
                              className="textarea"
                              placeholder="Mensagem..."
                              value={form.message}
                              onChange={this.handleFormChange}>
                            </textarea>
                            <span>{this.validator.message('message', form.message, 'required', false, {default: "Campo obrigatório"})}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="answer">{this.state.answer}</div>
                    <div className="field">
                      <div className="control">
                        <div className="button-espaco"><Button type="submit">Enviar</Button></div>
                      </div>
                    </div>
                  </form>
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