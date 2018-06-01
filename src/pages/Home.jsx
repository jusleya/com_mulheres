import React from 'react';

//Components
import Banner    from '../components/home/Banner';
import Evento    from '../components/home/Evento';
import QuemSomos from '../components/home/QuemSomos';

import '../assets/styles/pages/home.css';

const Home = () => (
  <div id="home">
    <div className="section">
      <Banner />
      <QuemSomos />
      <Evento />
    </div>
  </div>
);

export default Home;