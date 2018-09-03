import React from 'react';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';
import SimpleReactValidator from 'simple-react-validator';

//Components
import Button from '../../components/Button';

//Imagem
import xicara from './image/xicara.png';

//CSS
import './css/contato.css';

class Contato extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '', email: '', subject: '', message: '',
      answer: '',
      isValidRecaptcha: false,
      isLoadingButton: false
    }

    this.verifyCallback = this.verifyCallback.bind(this);
    this.validator = new SimpleReactValidator();
  }

  verifyCallback() {
    this.setState({ isValidRecaptcha: true });
  };

  handleFormChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({answer: ""});
    this.setState({isLoadingButton: true});

    if(!this.state.isValidRecaptcha) {
      this.setState({answer: ["Efetue a verificação do robô."]});
      this.setState({isLoadingButton: false});
      return;
    }

    if(!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
      return;
    }

    this.setState({answer: [<i class="material-icons icons">loop</i>, " Enviando sua mensagem..."]});

    axios.post("", {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    })
    .then((response) => {
      if(!response.data.error) {
        this.setState({answer: [<i className="material-icons icons">check</i>, " Sua mensagem foi enviada com sucesso!"]});
        this.setState({isLoadingButton: false});
      }
      else {
        this.setState({answer: [<i className="material-icons icons">clear</i>, "Ops! Ocorreu algum erro ao enviar sua mensagem. Por favor, tente novamente."]});
        this.setState({isLoadingButton: false});
      }
      //console.log(response);
    })
    .catch((error) => {
      this.setState({answer: [<i className="material-icons icons">clear</i>, "Ops! Ocorreu algum erro ao enviar sua mensagem. Por favor, tente novamente."]});
      this.setState({isLoadingButton: false});
      //console.log(error);
    });
  }

  render(){
    const { verifyCallback } = this;
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
                          <div className="control">
                            <input
                              id="name"
                              name="name"
                              className="input"
                              type="text"
                              placeholder="Nome"
                              value={this.state.name}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('name', this.state.name, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal espaco">
                      <div className="field-label is-normal">
                        <label className="label">E-mail</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input
                              id="email"
                              name="email"
                              className="input"
                              type="email"
                              placeholder="E-mail"
                              value={this.state.email}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('email', this.state.email, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal espaco">
                      <div className="field-label is-normal">
                        <label className="label">Assunto</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <input
                              id="subject"
                              name="subject"
                              className="input"
                              type="text"
                              placeholder="Assunto"
                              value={this.state.subject}
                              onChange={this.handleFormChange}
                            />
                            <span>{this.validator.message('subject', this.state.subject, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="field is-horizontal espaco">
                      <div className="field-label is-normal">
                        <label className="label">Mensagem</label>
                      </div>
                      <div className="field-body">
                        <div className="field">
                          <div className="control">
                            <textarea
                              id="message"
                              name="message"
                              className="textarea"
                              placeholder="Mensagem..."
                              value={this.state.message}
                              onChange={this.handleFormChange}>
                            </textarea>
                            <span>{this.validator.message('message', this.state.message, 'required', false, { default: "Campo obrigatório" })}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                    <div className="espaco" align="center">
                      <Recaptcha
                        sitekey=""
                        render="explicit"
                        hl="pt-BR"
                        verifyCallback={verifyCallback}
                        required />
                    </div>

                    <div className="field">
                      <div className="control">
                        <div className="align">
                          <Button type="submit">Enviar</Button>
                        </div>
                      </div>
                    </div>

                    <p className="answer">{this.state.answer}</p>

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
                    Ou se preferir, você pode nos encontrar no <strong><a id="instagram" href="https://www.instagram.com/com.mulheres/" target="_blank" rel="noopener noreferrer">Instagram</a></strong>, <strong><a id="facebook" href="https://www.facebook.com/com2mulheres/" target="_blank" rel="noopener noreferrer">Facebook</a></strong> ou no e-mail: <strong><a href="mailto:com.mulheres@gmail.com" target="_blank" rel="noopener noreferrer">com.mulheres@gmail.com</a></strong>.
                  </p>
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