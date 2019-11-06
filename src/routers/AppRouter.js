import React from 'react';
import Home from '../components/Home.js';
import ContactPage from '../components/ContactPage.js';
import MoreInfoPage from '../components/MoreInfoPage.js';
import NewsPage from '../components/NewsPage.js';
import FAQPage from '../components/FAQPage.js';
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
        <div className="main-content">
          <Header />
          {/* <div className="main-app-spacer"> */}
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
              <Route 
                path="/more-info/:id"
                component={MoreInfoPage}
                />
              <Route 
                path="/news" 
                component={NewsPage} 
                />
              <Route
                path="/faq"
                component={FAQPage} 
                />
              <Route component={PageNotFound} />
            </Switch>
          {/* </div> */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  };
};

export default AppRouter;