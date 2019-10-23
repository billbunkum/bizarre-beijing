import React from 'react';
import Home from '../components/Home.js';
import ContactPage from '../components/ContactPage.js';
import MoreInfoPage from '../components/MoreInfoPage.js';
import NewsPage from '../components/NewsPage.js';
import PageNotFound from '../components/PageNotFound.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// TRYING react context
// const EventsContext = React.createContext('events');

class AppRouter extends React.Component {

  render() {  
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route 
              path="/" 
              exact={true} 
              render={() => <Home 
                events={this.props.events}
                />} 
             />
            <Route 
              path="/contact" 
              component={ContactPage} 
             />

            <Route exact path="/more-info/:id"
              component={MoreInfoPage}
             />
            <Route 
              path="/news" 
              component={NewsPage} 
             />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  };
};

export default AppRouter;