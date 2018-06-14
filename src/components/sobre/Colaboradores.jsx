import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Componentes
import Card from './CardComponent';

//Actions
import {changeC5} from '../../store/sobre/action';
import {changeC6} from '../../store/sobre/action';

//Icones
import { FacebookBoxIcon, LinkedinBoxIcon, InstagramIcon, TwitterBoxIcon } from 'mdi-react';

class Colab extends React.Component {
  render(){
    const {...props} = this.props;
    var styleList = (props.c5 || props.c6) ? 'fadeIn' : 'fadeOut';

    return (
      <div id="equipe-children">
        <div className="columns is-centered">
          <div className="column"></div>
          <Card image={props.image5} name={props.name5} funcao={props.funcao5}>
            <a onClick={props.changeC5}>
              {props.c5? 'Menos' : 'Ver Mais'}
              {props.c5? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>

          <Card image={props.image6} name={props.name6} funcao={props.funcao6}>
            <a onClick={props.changeC6}>
              {props.c6? 'Menos' : 'Ver Mais'}
              {props.c6? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>
          <div className="column"></div>
        </div>
        <div className={styleList}>
          <div className="box-descricao">
            { props.c5 ?
                <div>
                  <p className="descricao">Descrição de Jaine</p>
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <LinkedinBoxIcon className="icon" />
                    </a>
                  </span>
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon className="icon" />
                    </a>
                  </span>
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <TwitterBoxIcon className="icon" />
                    </a>
                  </span>
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <FacebookBoxIcon className="icon"/>
                    </a>
                  </span>
                </div>
              :
                <div>
                  <p className="descricao">
                    Estudante de Ciência da Computação na Universidade Federal de Sergipe. Atualmente membro bolsista da Comissão Organizadora dos Hackathons UFS. Entusiasta na área de front-end, migrando o para desenvolvimento mobile com linguagens nativas. Nas horas vagas, maratonista profissional de séries da Netflix, alternando com filmes em preto e branco, e documentários. Apaixonada por livros, HQ's, kickboxing e Engenharia de Software.
                  </p>
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <LinkedinBoxIcon className="icon" />
                    </a>
                  </span>
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon className="icon" />
                    </a>
                  </span>
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <TwitterBoxIcon className="icon" />
                    </a>
                  </span>
                  <span>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <FacebookBoxIcon className="icon"/>
                    </a>
                  </span>
                </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({c5: state.Card.c5, c6: state.Card.c6});
const mapDispatchToProps = dispatch => bindActionCreators({changeC5, changeC6}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Colab);