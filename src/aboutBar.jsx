import React, {Component} from 'react';
import SearchBar from './searchBar.jsx';

class AboutBar extends Component {

  constructor(props){
    super(props);
   
    this.state = {
      content: props
    };
  }

  render() {
    return <div className="about-bar">
             <div> {this.state.content} </div>
           </div>
  }
}

export default AboutBar;