import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import EmBreve from '../EmBreve';

//Components
import Destaque from './components/Destaque';

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
      hasPosts: false,
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
    this.setState({ hasPosts: false });

    axios.get(`${process.env.REACT_APP_API_BLOG_URI}/posts?_embed&page=${this.state.currentPage}&per_page=7`)
      .then(response => {
        this.setState({ totalPages: response.headers['x-wp-totalpages'] });
        response.data.forEach(function (post, i) {
          this.setState({ hasPosts: true });
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
    return (
      <div>
        <div id="eventos">
          {!this.state.hasPosts ?
            <EmBreve />
            :
            <div>
              <div className="section">
                {this.state.currentPage === 1 &&
                  <div>
                    {this.state.postFirst.map((post, i) => (
                      <div className="container">
                        <div className="box-card">
                          <Destaque
                            imagem={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url : null}
                            title={post.title.rendered}
                            linkEvt={`/eventos/${post.slug}/${post.id}/`}
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
                    <div className="columns is-multiline">
                      {this.state.posts.map((post, i) => (
                        <div align="center" className={`column is-4 ${i === 1 || i === 4 ? 'box-medium' : null}`}>
                          <p className="titulo-evento">{post.title.rendered}</p>
                          <img className="image" src={post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url : null} alt="" />
                          <div className="descricao" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                          <br />
                          <div align="center"><NavLink className="button-active" to={`/eventos/${post.slug}/${post.id}/`}>Saiba Mais<i className="material-icons">keyboard_arrow_right</i></NavLink></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="container paginas">
                  <div className="columns is-centered">
                    <div className="column is-12-desktop is-12-mobile">
                      <nav className="pagination is-centered align" aria-label="pagination">
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
          }
        </div>
      </div>
    );
  }
}

export default Eventos;