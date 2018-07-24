import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

// General
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import Contato from './views/Contato';
import Home    from './views/Home';
import Sobre   from './views/Sobre';

const Main = () => (
  <Router>
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sobre' component={Sobre} />
        <Route exact path='/contato' component={Contato} />
      </Switch>
      <Footer />
    </main>
  </Router>
)

export default Main;