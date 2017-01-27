import React, {Component} from 'react';


class AboutBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      content: {

      },
    };
  }

  render() {
    return <div className="about-bar">
             Content
           </div>
  }
}

export default AboutBar;