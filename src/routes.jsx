import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

// General
import Header from './general/Header';
import Footer from './general/Footer';

//Pages
import Home   from './pages/Home';

const Main = () => (
  <Router>
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </main>
  </Router>
)

export default Main;