import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

// General
import Header      from './components/Header';
import Footer      from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

//Pages
import Contato from './views/Contato';
import Home    from './views/Home';
import Sobre   from './views/Sobre';
import PageNotFound from './views/404';
import Eventos from './views/Eventos';

const Main = () => (
  <Router>
    <ScrollToTop>
      <main>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/sobre' component={Sobre} />
          <Route exact path='/contato' component={Contato} />
          <Route exact path='/eventos' component={Eventos} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </main>
    </ScrollToTop>
  </Router>
)

export default Main;