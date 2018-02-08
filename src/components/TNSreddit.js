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
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const episodes = res.data.data.children.map(obj => obj.data);
        this.setState({ episodes });
        console.log(res.data.data.children);
        // console.log(res.data[0].originalTitle);
      });




    // axios.get('http://ec2-52-90-200-167.compute-1.amazonaws.com:8080/')
    //   .then(function (response) {
    //     console.log(response.data);
    //     response = response.data.forEach(episode => {
    //       console.log(episode.originalTitle)
    //     });
    //     this.setState({ episodes });
    //     console.log(episodes);
    //   })
    //   .catch(function (error) {
    //     console.log("error 404");
    //   });
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
            <li className="list__episode" key={episode.id}>S.{episode.num_comments} ep.{episode.ups} - {episode.title} <br /> Rank: {episode.score}/10 - {episode.num_comments} comments</li>
          )}

          </ul>
        </div>
      </div>
    );
  }
}
