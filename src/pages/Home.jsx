import React from 'react';

//Components
import Banner    from '../components/home/Banner';
import Parceiros from '../components/home/Parceiros';
import Evento    from '../components/home/Evento';
import QuemSomos from '../components/home/QuemSomos';

//CSS
import '../assets/styles/pages/home.css';

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