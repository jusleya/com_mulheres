import React, { Component } from 'react';
import axios from 'axios';

//Components
import Destaque from './components/Destaque';

//Image
//import evento from './image/evento.png';
//import womakers from './image/womakers.jpg';

//CSS
import './css/style.css';

const hr = { border: "1px dashed rgb(189, 203, 216)" };

class Eventos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      posts: [],
      postFirst: [],
      currentPage: 1,
      totalPages: 0
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    this.setState({ postFirst: [] });
    this.setState({ posts: [] });

    axios.get(`${process.env.REACT_APP_API_BLOG_URI}/posts?_embed&page=${this.state.currentPage}`)
      .then(response => {
        this.setState({ totalPages: response.headers['x-wp-totalpages'] });
        this.setState({ posts: response.data });
        response.data.forEach(function (post, i) {
          // Se tiver na primeira página, a primeira notícia fica em destaque...
          if (this.state.currentPage === 1) {
            if (i === 0) {
              this.setState({ postFirst: [...this.state.postFirst, post] });
            } else {
              this.setState({ posts: [...this.state.posts, post] });
            }
          } else {
            this.setState({ posts: [...this.state.posts, post] });
          }
        }.bind(this));
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }

  nextPage = () => {
    this.setState({ isLoading: true });
    // eslint-disable-next-line
    this.setState({ currentPage: ++this.state.currentPage });
    this.getPosts();
    window.scrollTo(0, 0);
  };

  previousPage = () => {
    this.setState({ isLoading: true });
    // eslint-disable-next-line
    this.setState({ currentPage: --this.state.currentPage });
    this.getPosts();
    window.scrollTo(0, 0);
  };

  render() {
    const { ...props } = this.props;
    return (
      <div>
        <div id="eventos">
          <div className="section">
            {this.state.currentPage === 1 &&
              <div>
                {this.state.postFirst.map((post, i) => (
                  <div className="container">
                    <div className="box-card">
                      <Destaque
                        imagem={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url : null}
                        title={post.title.rendered}
                        linkEvt={`/blog/${post.slug}/${post.id}/`}
                        data={post.acf.data_posts}
                        linkMaps={post.acf.local_link_posts}
                        auditorio={post.acf.local_nome_posts}
                        valor={post.acf.entrada_posts}
                      />
                    </div>
                    <hr style={hr} />
                  </div>
                ))}
              </div>
            }

            <div id="anteriores">
              <div className="container">
                <p className="titulo">Eventos Anteriores</p>
                <div className="columns">
                  <div align="center" className="column is-4 container-column">
                    {this.state.posts.map((post, i) => (
                      <div>
                        <p className="titulo-evento">{props.evento}</p>
                        <img className="image" src={props.imagemEvt} alt="" />
                        <p className="descricao">
                          {props.descricaoEvt}
                        </p>
                        <br />
                        {props.showButton ?
                          <div align="center"><a className="button-active" link={props.linkEvt}>Saiba Mais<i className="material-icons">keyboard_arrow_right</i></a></div>
                          : null
                        }
                      </div>
                    ))}
                  </div>
                  {/*<div align="center" className="column is-4 box-medium container-column">
                    <p className="titulo-evento">{props.evento}</p>
                    <img className="image" src={props.imagemEvt} alt="" />
                    <p className="descricao">
                      {props.descricaoEvt}
                    </p>
                    <br />
                    {props.showbutton ?
                      <div align="center"><a className="button-active" link={props.linkEvt}>Saiba Mais<i className="material-icons">keyboard_arrow_right</i></a></div>
                      : null
                    }
                  </div>
                  <div align="center" className="column is-4 container-column">
                    <p className="titulo-evento">{props.evento}</p>
                    <img className="image" src={props.imagemEvt} alt="" />
                    <p className="descricao">
                      {props.descricaoEvt}
                    </p>
                    <br />
                    {props.showbutton ?
                      <div align="center"><a className="button-active" link={props.linkEvt2}>Saiba Mais<i className="material-icons">keyboard_arrow_right</i></a></div>
                      : null
                    }
                  </div>*/}
                </div>
              </div>
            </div>

            <div className="container paginas">
              <div className="columns is-centered">
                <div className="column is-6">
                  <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                    {this.state.currentPage > 1 ?
                      <a className="pagination-previous button-active" onClick={this.previousPage}>Anterior</a>
                      : null
                    }
                    {this.state.currentPage < this.state.totalPages ?
                      <a className="pagination-next button-active" onClick={this.nextPage}>Próximo</a>
                      : null
                    }
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Eventos;