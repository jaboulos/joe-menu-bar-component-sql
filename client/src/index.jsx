import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './components/SideBar.jsx';
import AppRouter from './Router.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    let newFollowers = this.state.followers;
    if(!this.state.toggle || this.state.followedUser === null) {
      this.setState({
        toggle: 'On',
        followedUser: this.state.display_name,
        followedCategory: this.state.category,
        followedLogo: this.state.logo,
        followers: newFollowers + 1
      })
    } else {
      console.log(this.state)
      this.setState({
        followedUser: null,
        followedCategory: null,
        followedLogo: null,
        followers: newFollowers - 1
      })
    }
  }

  componentDidMount() {
    fetch('/username')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            category: result[0].category,
            display_name: result[0].display_name,
            followers: result[0].followers,
            following: result[0].following,
            logo: result[0].logo,
            profile_image_url: result[0].profile_image_url,
            users: result
          })
        },
        (error) => {
          console.log('error')
        }
      )

      fetch('/channels')
      .then(res => res.json())
      .then(
        (result) => {
          console.log('channels results =====> ', result)
          this.setState({
            channels: result
          })
        },
        (error) => {
          console.log('error')
        }
      )

  }

  render() {
    return (


      <div>
        <AppRouter userInfo={this.state} onClick={(e) => this.handleClick(e)}/>
        <SideBar userInfo={this.state} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));