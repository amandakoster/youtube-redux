import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {term:''}
    }

    render() {
        console.log('___STATE___', this.state)
        return (
        <div>

        <input 
        value={this.state.term}
        onChange= { e => this.setState({term: e.target.value}) }/>

        </div>
    )
    }
};

export default SearchBar;