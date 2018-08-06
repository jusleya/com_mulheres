import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Componentes
import Card      from './Card';
import Descricao from './Descricao';

//Actions
import {changeC5} from '../../../store/sobre/action';
import {changeC6} from '../../../store/sobre/action';
import {changeC4} from '../../../store/sobre/action';

class Colab extends React.Component {
  render(){
    const {...props} = this.props;
    var styleList = (props.c4 || props.c5 || props.c6) ? 'fadeIn' : 'fadeOut';

    return (
      <div id="equipe-children">
        <div className="columns is-centered">
          {props.c4 === false && props.c5 === false && props.c6 === false?
            <div className="column is-1"></div>
            : null
          }
          {/*Veronica*/}
          <Card image={props.image4} name={props.name4} funcao={props.funcao4}>
            <a className="is-hidden-mobile" onClick={props.changeC4}>
              {props.c4? 'Menos' : 'Ver Mais'}
              {props.c4? 
                <i className="material-icons">keyboard_arrow_left</i> :
                <i className="material-icons">keyboard_arrow_right</i>
              }
            </a>
            <a className="is-hidden-tablet" onClick={props.changeC4}>
              {props.c4? 'Menos' : 'Ver Mais'}
              {props.c4? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>

          { props.c4 ?
            <div className="column">
              <div className={styleList}>
                <div className="box-descricao">
                  <Descricao
                    descricao={`Graduanda em Ciência da Computação pela Universidade Federal de Sergipe. Coordenadora do grupo "Computação com Mulheres" e também colaboradora do grupo WoMakersCode. Membro do grupo de pesquisa em Engenharia de Software e Assessora de Recursos Humanos da SofTeam - Empresa Júnior de Computação, ambos da UFS. Pesquisadora da área de Engenharia de Software; Informática na Educação e Informática na Saúde, área pela qual é apaixonada!`}
                    linkedin=""
                    instagram=""
                    twitter=""
                    facebook=""
                    email=""
                  />
                </div>
              </div>
            </div>
            : null
          }

          {/*Jaine*/}
          <Card image={props.image5} name={props.name5} funcao={props.funcao5}>
            <a className="is-hidden-mobile" onClick={props.changeC5}>
              {props.c5? 'Menos' : 'Ver Mais'}
              {props.c5? 
                <i className="material-icons">keyboard_arrow_left</i> :
                <i className="material-icons">keyboard_arrow_right</i>
              }
            </a>
            <a className="is-hidden-tablet" onClick={props.changeC5}>
              {props.c5? 'Menos' : 'Ver Mais'}
              {props.c5? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>

          { props.c5 ?
            <div className="column">
              <div className={styleList}>
                <div className="box-descricao">
                  <Descricao
                    descricao={`Graduanda em Ciência da Computação na Universidade Federal de Sergipe e pesquisadora na área de Metodologia e Técnicas da Computação, Linguagens de Programação e Engenharia de Software. Apaixonada por programação, desafios, jogos de RPG e séries de TV.`}
                    linkedin="https://www.linkedin.com/in/jaine-concei%C3%A7%C3%A3o-02b531138/"
                    instagram="https://www.instagram.com/jaiconceicao/"
                    email="mailto:jainecs@dcomp.ufs.br"
                  />
                </div>
              </div>
            </div>
            : null
          }
          
          {/*Natalia*/}
          <Card image={props.image6} name={props.name6} funcao={props.funcao6}>
            <a className="is-hidden-mobile" onClick={props.changeC6}>
              {props.c6? 'Menos' : 'Ver Mais'}
              {props.c6? 
                <i className="material-icons">keyboard_arrow_left</i> :
                <i className="material-icons">keyboard_arrow_right</i>
              }
            </a>
            <a className="is-hidden-tablet" onClick={props.changeC6}>
              {props.c6? 'Menos' : 'Ver Mais'}
              {props.c6? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>
          
          { props.c6 ?
            <div className="column">
              <div className={styleList}>
                <div className="box-descricao">
                  <Descricao
                    descricao={`Estudante de Ciência da Computação na Universidade Federal de Sergipe. Atualmente membro bolsista da Comissão Organizadora dos Hackathons UFS. Entusiasta na área de front-end, migrando o para desenvolvimento mobile com linguagens nativas. Nas horas vagas, maratonista profissional de séries da Netflix, alternando com filmes em preto e branco, e documentários. Apaixonada por livros, HQ's, kickboxing e Engenharia de Software.`}
                    linkedin="https://www.linkedin.com/in/natalia-guimar%C3%A3es-b2668347/"
                    instagram="https://www.instagram.com/guimaraesnaty/"
                    facebook="https://www.facebook.com/natalia.souza.127201"
                    email="mailto:nataliasouzaguimaraes@gmail.com"
                  />
                </div>
              </div>
            </div>
            : null
          }

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({c4: state.Card.c4, c5: state.Card.c5, c6: state.Card.c6});
const mapDispatchToProps = dispatch => bindActionCreators({changeC4, changeC5, changeC6}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Colab);