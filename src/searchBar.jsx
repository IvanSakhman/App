import React, {Component} from 'react';
import apiSearch from './apiSearch.js';
import AboutBar from './aboutBar.jsx';


class SearchBar extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      content: [],
      default: []
    };
  }

  _onInputValueChanged(event) {
    let value = event.target.value
    this.setState({ value });
  }

  _onSearchClick() {
    let information = [];
    let defaultInfo = [];
    if (this.state.value.length) { 
      apiSearch.fetchData(this.state.value).then(data => {
        data = JSON.parse(data);
        console.log(data);
        if (data) { 
          for (let key in data) {
            information.push(data[key]);
            defaultInfo.push(key);
          }
          this.setState({content: information});
          this.setState({default: defaultInfo});
          //console.log(information);
        }
      });
    }
    return false;
  }

  _contentOnPage() {
    if (this.state.content) {
      return  <div className="row"> 
                <div className="title"> {this.state.default[0]}  {this.state.content[0]} </div>
                <div> {this.state.default[1]}  {this.state.content[1]} </div>
              </div>
    }
  }

  render() {
    return  <div className="search-bar container">
              <input className="search-input" type="text" value={this.state.value} placeholder="Search" onChange={::this._onInputValueChanged} />
              <input type="button" value="Search" onClick={::this._onSearchClick} />
              <div className="about-bar">
                <div> {this._contentOnPage()} </div>
              </div>
            </div>
  }
}

export default SearchBar;