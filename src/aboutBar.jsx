import React, {Component} from 'react';
import SearchBar from './searchBar.jsx';

class AboutBar extends Component {

  constructor(props){
    super(props);
  

  }

  render() {
    return <div className="about-bar">
             <div> {SearchBar} </div>
           </div>
  }
}

export default AboutBar;