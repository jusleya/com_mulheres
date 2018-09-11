import React, { Component } from 'react';
import axios from 'axios';

import '../css/style.css';

class PagEvento extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      post: ''
    }
  }

  componentDidMount() {
    this.getPost();
  }

  getPost() {
    axios.get(`${process.env.REACT_APP_API_BLOG_URI}/posts/${this.props.match.params.id}?_embed`)
      .then((response) => {
        this.setState({ post: response.data });
        this.setState({ isLoading: false });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <div id="pag-evento">
        <div className="section">
          <div className="container">
            {this.state.isLoading ?
              <div className="columns is-centered card-alert">
                <div className="column is-6">
                  <div className="box-card">
                    <div className="center-icon">
                      <i className="material-icons icon">more_horiz</i>
                    </div>
                    <p>Carregando notícia...</p>
                  </div>
                </div>
              </div>
              :
              <div>
                {
                  this.state.post._embedded['wp:featuredmedia'] ?
                    <div align="center" className="columns is-centered">
                      <div className="column">
                        <img className="image" src={this.state.post._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url} alt="" />
                      </div>
                    </div>
                    : null
                }
                <div className="columns is-centered">
                  <div className="column is-10 title">
                    <h1 className="titulo">{this.state.post.title.rendered}</h1>
                  </div>
                </div>
                <div className="columns is-centered">
                  <div className="column is-10 body">
                    <div className="texto" dangerouslySetInnerHTML={{ __html: this.state.post.content.rendered }} />
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default PagEvento;