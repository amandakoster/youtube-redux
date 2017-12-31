import React, { Component } from 'react';
import _ from 'lodash';
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
    this.videoSearch('back holes');
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
      });
    });

  }

  render() {
    const videoSearch= _.debounce((term) => { this.videoSearch(term) },300);

    return (
      <div>

        <div>YouTube app with React and Redux</div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />

      </div>
    );
  }
}

export default App;
