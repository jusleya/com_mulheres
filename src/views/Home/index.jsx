import React from 'react';

//Components
import Banner    from './home/Banner';
import Parceiros from './home/Parceiros';
import Evento    from './home/Evento';
import QuemSomos from './home/QuemSomos';

//CSS
import './css/home.css';

const Home = () => (
  <div id="home">
    <Banner />
    <div className="section">
      <QuemSomos />
      <Evento />
      <Parceiros />
    </div>
  </div>
);

export default Home;