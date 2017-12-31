import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
const API_KEY= 'AIzaSyDrMKV08QY0agCAddJvXYkrraaFANuRqDg'
import VideoDetail from './video-detail';
import SearchBar from './searchbar';
import VideoList from './video-list';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key:API_KEY, term: 'black holes'}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>

        <div>YouTube app with React and Redux</div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />

      </div>
    );
  }
}

export default App;
