import React from 'react';

//Image
import banner from '../../assets/image/home/banner.jpg';

const Banner = () => (
  <div id="banner">
    <div className="bg" style={{background: `url(${banner}) center  center / cover` }}>
      <div className="section espacamento">
        <div className="container">
          <p className="titulo">Computação com Mulheres</p>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;