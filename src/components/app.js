import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
const API_KEY= 'AIzaSyDrMKV08QY0agCAddJvXYkrraaFANuRqDg'
import VideoDetail from './video-detail';
import SearchBar from './searchbar';
import VideoList from './video-list';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {videos: []}

    YTSearch({key:API_KEY, term: 'cats'}, (videos) => {
      this.setState({ videos });
    });
  }


  render() {
    return (
      <div>

      <div>YoutTube app with React and Redux</div>
      <SearchBar />
      <VideoDetail video={this.state.videos[0]} />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
