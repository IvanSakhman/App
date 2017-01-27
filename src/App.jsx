import React, {Component} from 'react';
import SearchBar from './searchBar.jsx';
import AboutBar from './aboutBar.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar/>
        <AboutBar/>
      </div>
    );
  }
}
export default App;
