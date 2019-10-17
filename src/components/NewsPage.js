import React from 'react';
import { Link } from 'react-router-dom';

class NewsPage extends React.Component {
  render() {
    return (
      <div className="main-content">
        <h2>Bizarre News</h2>
        <blockquote className="news-page">
          <h3 className="news-page__subtitle">Reviews</h3>
          "Thanks to all who took part in the <em>Aug. 15 inaugural Haunted Beijing tour</em>, led by supernaturalist Jim Nobles. Jim was a superb guide as we mingled with denizens of the spirit world on the night of the Hungry Ghost Festival. Spooky thunder and lightning kicked off the walk, and a swarm of bats filled the skies as we trod on Beijing's former execution grounds. Regrets that the tour was filled to capacity -- if you didn't respond early enough to snag a place, stay tuned: Jim will be crossing over to the dark side again in the not too distant future and you'll be invited to sign up -- if you dare."
          <p className="news-page__autograph">
            – <em>Royal Asiatic Society (China, Beijing)</em>
          </p>
        </blockquote>
        <div className="control-buttons news-page__buttons">
          <button className="btn btn-outline-light btn-lg">
            <Link to="/">Back Home</Link>
          </button>
        </div>
      </div>
    );
  }
};

export default NewsPage;