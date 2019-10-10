import React from 'react';
import Header from './Header.js';
import UpcomingEvent from './UpcomingEvent.js';
import Notice from './Notice.js';
import Footer from './Footer.js';

class BizarreApp extends React.Component {
  render() {
    return (
      <div>
      <Header />
      <UpcomingEvent />
      <Notice />
      <Footer />
      </div>
    )
  };
};

export default BizarreApp;