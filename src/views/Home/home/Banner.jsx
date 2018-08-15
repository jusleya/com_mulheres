import React from 'react';

//Image
import banner from '../image/banner.gif';

const Banner = () => (
  <div id="banner">
    <div className="bg" style={{background: `url(${banner}) center  center / cover` }}>
      <div className="section">
        <div className="container">
        </div>
      </div>
    </div>
  </div>
);

export default Banner;