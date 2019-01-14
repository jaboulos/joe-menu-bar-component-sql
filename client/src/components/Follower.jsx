import React from 'react';


class Follower extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
}

componentDidMount() {
  fetch('/users/username')
    .then(res => res.json())
    .then(
      (result) => {
        const users = {};
        console.log(Object.keys(result));

        Object.keys(result).forEach(function(key, index) {
          users[key] = (result[key])
          console.log('users', users);
        })
        this.setState({
          users
        })
      },
      (error) => {
        console.log('error')
      }
    )
  }


  render() {
    const followers = this.state.users;
    console.log('these are followers', typeof followers)

    // if(followers === undefined) {
    //   followers === 'Loading...';
    // } else {
    //   followers = this.state.result;
    // }


    // console.log(this.state)
    return (
      <div style={styles.follower}>
       {followers}
      </div>
    )
  }
}
const styles = {};

styles.follower = {
  width: "500px",
  height: "250px",
  color: "red",
  borderRadius: "5px"
}

styles.image = {
    width: "25%",
    borderRadius: "4px"
}


export default Follower;