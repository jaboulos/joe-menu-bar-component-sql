import React from 'react';
import ReactDOM from 'react-dom';
import './../style.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  render() {
    return (
    <div>
      <Navigation />
    </div>
    )
  }
}


class Navigation extends React.Component {
  render() {
    return (
      <ul className='navigation-titles'>
        <li>
          {/* <Link to={'/Google/${}'}> */}
          <a href='www.google.com'>Google</a>
          {/* </Link> */}
        </li>
        <li>
          <a href='www.google.com'>Clips</a>
        </li>
        <li>
          <a href='www.google.com'>Events</a>
        </li>
        <li>
          <a href='www.google.com'>Followers</a>
        </li>
      </ul>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));