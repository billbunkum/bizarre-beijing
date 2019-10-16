import React from 'react';

class NewsPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Bizarre News</h2>
        <blockquote className="news-1">
          "Thanks to all who took part in the <em>Aug. 15 inaugural Haunted Beijing tour</em>, led by supernaturalist Jim Nobles. Jim was a superb guide as we mingled with denizens of the spirit world on the night of the Hungry Ghost Festival. Spooky thunder and lightning kicked off the walk, and a swarm of bats filled the skies as we trod on Beijing's former execution grounds. Regrets that the tour was filled to capacity -- if you didn't respond early enough to snag a place, stay tuned: Jim will be crossing over to the dark side again in the not too distant future and you'll be invited to sign up -- if you dare."
          <p>– Royal Asiatic Society (China, Beijing)</p>
        </blockquote>
      </div>
    );
  }
};

export default NewsPage;