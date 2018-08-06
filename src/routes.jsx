import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

// General
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import Contato from './views/Contato';
import EmBreve from './views/EmBreve';
import Home    from './views/Home';
import Sobre   from './views/Sobre';
import PageNotFound from './views/404';

const Main = () => (
  <Router>
    <main>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sobre' component={Sobre} />
        <Route exact path='/contato' component={Contato} />
        <Route exact path='/eventos' component={EmBreve} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </main>
  </Router>
)

export default Main;