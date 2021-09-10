import React from 'react';
import axios from 'axios';

export default class WatchedTracker extends React.Component {  
  state = {  
    animes:[]  
  }  
componentDidMount() {  
    axios.get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)  
      .then(res => {  
        const animes = res.data;  
        this.setState({ animes });  
      })  
  }  

  render() {
    return (
      <div>
        {/* <ul>
          { this.state.animes.map(anime => <li>{anime.name}</li>)}
        </ul>
        <div> */}
          <p>Testing the API { this.state.anime }</p>
        {/* </div> */}
      </div>
    )
  }
}