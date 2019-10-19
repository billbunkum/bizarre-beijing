import React from 'react';
import Home from '../components/Home.js';
import ContactPage from '../components/ContactPage.js';
import MoreInfoPage from '../components/MoreInfoPage.js';
import NewsPage from '../components/NewsPage.js';
import PageNotFound from '../components/PageNotFound.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class AppRouter extends React.Component {
  state = {
    events: [
      {
        capacity: 18,
        date: "October 18, 2019",
        departTime: "6:30pm",
        endTime: "9:00pm",
        gatherTime: "6:15pm",
        imagePath: "/img/xuanwumen_church.png",
        price: "¥280",
        place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
        soldOut: true,
        startTime: "6:30pm",
        title: "October 18th Haunt Tour"
      },
      {
        capacity: 18,
        date: "October 26, 2019",
        departTime: "6:30pm",
        endTime: "9:00pm",
        gatherTime: "6:15pm",
        imagePath: "/img/xuanwumen_church2.jpg",
        price: "¥280",
        place: "Xuanwumen (in front of Xuanwumen Catholic Church)",
        soldOut: false,
        startTime: "6:30pm",
        title: "October 26th Haunt Tour"
      }
    ]
  };

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
                events={this.state.events}
                />} 
            />
            <Route 
              path="/contact" 
              component={ ContactPage } 
            />
{/* MAY USE THIS route FOR DEFAULT TOUR INFO? */}
            <Route 
              path="/more-info"
              exact={true}
              component={MoreInfoPage}
            />
            <Route 
              path="/more-info/:id"
              render={() => <MoreInfoPage 
                events={this.state.events}
              />}
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