import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//Componentes
import Card from './CardComponent';

//Actions
import {changeC1} from '../../store/sobre/action';
import {changeC2} from '../../store/sobre/action';
import {changeC3} from '../../store/sobre/action';
import {changeC4} from '../../store/sobre/action';

//Icones
import { FacebookBoxIcon, LinkedinBoxIcon, InstagramIcon, TwitterBoxIcon } from 'mdi-react';

class Adm extends React.Component {
  render(){
    const {...props} = this.props;
    var styleList = (props.c1 || props.c2 || props.c3 || props.c4) ? 'fadeIn' : 'fadeOut';

    return (
      <div id="equipe-children">
        <div className="columns is-centered">
          <Card image={props.image1} name={props.name1} funcao={props.funcao1}>
            <a onClick={props.changeC1}>
              {props.c1? 'Menos' : 'Ver Mais'}
              {props.c1? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>

          <Card image={props.image2} name={props.name2} funcao={props.funcao2}>
            <a onClick={props.changeC2}>
              {props.c2? 'Menos' : 'Ver Mais'}
              {props.c2? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>

          <Card image={props.image3} name={props.name3} funcao={props.funcao3}>
            <a onClick={props.changeC3}>
              {props.c3? 'Menos' : 'Ver Mais'}
              {props.c3? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>

          <Card image={props.image4} name={props.name4} funcao={props.funcao4}>
            <a onClick={props.changeC4}>
              {props.c4? 'Menos' : 'Ver Mais'}
              {props.c4? 
                <i className="material-icons">keyboard_arrow_up</i> :
                <i className="material-icons">keyboard_arrow_down</i>
              }
            </a>
          </Card>
        </div>
        <div className={styleList}>
          <div className="box-descricao">
            { props.c1 ?
              <div>
                {/*Alana*/}
                <p className="descricao">
                  Graduanda em Ciência da Computação na UFS, co-fundadora do "Computação com Mulheres", entusiasta na área da Inteligência Artificial e todas as suas vertentes. Atualmente pesquiso na área de Chatbots com interdisciplinaridade na Psicologia Cognitiva e Comportamental. Na vida sou uma eterna pesquisadora do meu auto conhecimento espiritual e corporal. Danço, toco, corro, luto e medito.
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
              : props.c2 ?
                <div>
                  {/*Jusley*/}
                  <p className="descricao">
                    Estudante de Ciência da Computação na Universidade Federal de Sergipe, pesquisadora na área de processamento de imagem e computação gráfica. Atualmente estagiando na empresa GetInfo como desenvolvedora Front-End. Uma das criadoras do projeto "Computação com Mulheres" (COM² Mulheres), organizer no GDG Aracaju e no projeto WTM Aracaju. Amo computação gráfica, câmera fotográfica, livros e karatê ♥.
                  </p>
                  <span>
                    <a href="https://br.linkedin.com/in/jusley-arley-422637143" target="_blank" rel="noopener noreferrer">
                      <LinkedinBoxIcon className="icon" />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.instagram.com/jusley_a/" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon className="icon" />
                    </a>
                  </span>
                  <span>
                    <a href="https://twitter.com/jusley_a" target="_blank" rel="noopener noreferrer">
                      <TwitterBoxIcon className="icon" />
                    </a>
                  </span>
                  <span>
                    <a href="https://www.facebook.com/jusley.arley" target="_blank" rel="noopener noreferrer">
                      <FacebookBoxIcon className="icon"/>
                    </a>
                  </span>
                </div>
              : props.c3 ?
                <div>
                  {/*Sthe*/}
                  <p className="descricao">
                    Formada em Análise e Desenvolvimento de Sistemas; Desenvolvedora Java, C, C# e PHP; Entusiasta do Software Livre; Colaboradora do LibreOffice Brasil e dos grupos Computação com Mulheres e WoMakersCode. Trabalha com desenvolvimento de aplicativos e é apaixonada por Engenharia de Software.
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
              :
              <div>
                {/*Veronica*/}
                <p className="descricao">
                  Graduanda em Ciência da Computação pela Universidade Federal de Sergipe. Uma das fundadoras e coordenadora do grupo "Computação com Mulheres" e também colaboradora do grupo WoMakersCode. Membro do grupo de pesquisa em Engenharia de Software e Assessora de Recursos Humanos da SofTeam - Empresa Júnior de Computação, ambos da UFS. Pesquisadora da área de Engenharia de Software; Informática na Educação e Informática na Saúde, área pela qual é apaixonada!
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

const mapStateToProps = state => ({c1: state.Card.c1, c2: state.Card.c2, c3: state.Card.c3, c4: state.Card.c4});
const mapDispatchToProps = dispatch => bindActionCreators({changeC1, changeC2, changeC3, changeC4}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Adm);