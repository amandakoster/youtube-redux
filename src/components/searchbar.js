import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            term ='',
        }
    }



    render() {
        return (
        
        <input onChange= {e => console.log(e.target.value)}/>

    )
}
};

export default SearchBar;