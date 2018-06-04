import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

// General
import Header from './general/Header';
import Footer from './general/Footer';

//Pages
import Home   from './pages/Home';
import Sobre   from './pages/Sobre';

const Main = () => (
  <Router>
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sobre' component={Sobre} />
      </Switch>
      <Footer />
    </main>
  </Router>
)

export default Main;