import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

// General
import Header from './components/general/Header';
import Footer from './components/general/Footer';
import Home from './pages/Home';

const Main = () => (
  <Router>
    <main>
      <Header />
      <Switch>
        <Route exact path='/' componet={Home} />
      </Switch>
      <Footer />
    </main>
  </Router>
)

export default Main;