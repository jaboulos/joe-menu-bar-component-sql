import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Videos from './components/Videos.jsx';
import Clips from './components/Clips.jsx';
import Events from './components/Events.jsx';
import Following from './components/Following.jsx';
import Followers from './components/Followers.jsx';


const AppRouter = (props) => {
  console.log('props=======>' ,props)
  const userInfo = props.userInfo;
  return (
    <Router>
      <div>
        <nav>
          <ul style={styles.nav}>
            <li style={styles.navItem}>
              <img style={styles.logo} src={userInfo.users[userInfo.selectedUser].logo} />
            </li>
            <li style={styles.navItem}>
              <Link to="/" style={styles.link}>{userInfo.users[userInfo.selectedUser].display_name}</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Videos" style={styles.link}>Videos  {userInfo.users[userInfo.selectedUser].Videos}</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Clips" style={styles.link}>Clips</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Events" style={styles.link}>Events</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Followers" style={styles.link}>Followers  {userInfo.users[userInfo.selectedUser].followers}</Link>
            </li>
            <li style={styles.navItem}>
              <Link to="/Following" style={styles.link}>Following  {userInfo.users[userInfo.selectedUser].following} </Link>
            </li>
          </ul>
          <button style={styles.navRight} >Subscribe</button>
          <button style={styles.navRight} onClick={(e) => props.onClick(e)}>Follow</button>
        </nav>

        <Route path="/Videos" component={Videos} />
        <Route path="/Clips" component={Clips} />
        <Route path="/Events" component={Events} />
        <Route path="/Followers" component={Followers} />
        <Route path="/Following" component={Following} />

      </div>
    </Router>
  );
}

const styles = {};

styles.link = {
  textDecoration: "none"
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  left: "251px",
  top: 0,
  height: "51px",
  display: "flex",
  fontSize: "14px",
  fontFamily: "Helvetica",
  fontColor: "#6441a4",
  alignContent: "center"
}

styles.navItem = {
  textAlign: "center",
  listStyleType: "none",
  padding: "10px",
}

styles.navRight = {
 float: "right",
 cursor: "pointer",
 backgroundColor: "#6441A5",
 borderColor: "#6441A5",
 borderRadius: "4px",
 padding: ".4rem .8rem",
 color: "white",
 marginRight: "10px"
}

styles.logo = {
  width: "25%",
  borderRadius: "4px"
}


export default AppRouter;