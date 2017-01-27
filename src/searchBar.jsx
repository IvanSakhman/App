import React, {Component} from 'react';
import apiSearch from './apiSearch.js';


class SearchBar extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  _onInputValueChanged(event) {
    let value = event.target.value
    this.setState({ value });
  }

  _onSearchClick() {
    
  }
 

  render() {
    return  <div className="search-bar">
              <input className="search-input" type="text" value={this.state.value} placeholder="Search" onChange={::this._onInputValueChanged} />
              <input type="button" value="Search" onClick={::this._onSearchClick} />
            </div>
  }
}

export default SearchBar;