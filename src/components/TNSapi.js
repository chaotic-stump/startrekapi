import React from 'react';
import axios from 'axios';

export default class TNSApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      episodes: []
    };
  }

  componentDidMount() {
    axios.get('http://ec2-52-90-200-167.compute-1.amazonaws.com:8080/')
      .then(function (response) {
        console.log(response.data);
        response = response.data.forEach(episode => {
          console.log(episode.originalTitle)
        });
        this.setState({ episodes });
        console.log(episodes);
      })
      .catch(function (error) {
        console.log("error 404");
      });
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <h1>Star Trek:</h1>
            <h2>The Next Generation</h2>
          </div>
        </div>
        <div className="container">
          <ul className="list">
            {this.state.episodes.map(episode =>
              <li key={episode.id}>{`${episode.seasonNumber}.${episode.episodeNumber} - ${episode.originalTitle} <br/> ${episode.averageRating} - ${episode.numVotes}`}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}