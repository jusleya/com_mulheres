import React from 'react';

//Components
import Banner    from '../components/home/Banner';
import Contato   from '../components/home/ContatoComponent';
import Evento    from '../components/home/Evento';
import QuemSomos from '../components/home/QuemSomos';

//CSS
import '../assets/styles/pages/home.css';

const Home = () => (
  <div id="home">
    <div className="section-home">
      <Banner />
      <QuemSomos />
      <Evento />
      <Contato />
    </div>
  </div>
);

export default Home;