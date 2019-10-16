import React from 'react';
import Home from '../components/Home.js';
import ContactPage from '../components/ContactPage.js';
import MoreInfoPage from '../components/MoreInfoPage.js';
import NewsPage from '../components/NewsPage.js';
import PageNotFound from '../components/PageNotFound.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/more-info" component={MoreInfoPage} />
          <Route path="/news" component={NewsPage} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;