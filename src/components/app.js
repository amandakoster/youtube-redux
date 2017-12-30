import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
const API_KEY= 'AIzaSyDrMKV08QY0agCAddJvXYkrraaFANuRqDg'
import SearchBar from './searchbar';




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

      </div>
    );
  }
}

export default App;
