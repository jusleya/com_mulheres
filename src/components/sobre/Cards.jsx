import React from 'react';

const Card = (props) => (
  <div id="card">
    <div className="columns is-centered">
      <div className="box">
        <div className="column is-3">
          <img src={props.image1} alt=""/>
        </div>
      </div>
      <div className="box">
        <div className="column is-3">
          <img src={props.image2} alt=""/>
        </div>
      </div>
      <div className="box">
        <div className="column is-3">
          <img src={props.image3} alt=""/>
        </div>
      </div>
      <div className="box">
        <div className="column is-3">
          <img src={props.image4} alt=""/>
        </div>
      </div>
    </div>
  </div>
);

export default Card;