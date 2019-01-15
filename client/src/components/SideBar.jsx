import React from 'react';

const SideBar = (props) => {
  const userInfo = props.userInfo.users;
  const firstThree = userInfo.slice(0, 3);
  const three = firstThree.map((user, index) => {
    return (
      <div key={index} style={styles.div} onClick={(e) => props.onSelect(e, index)}>
      <img src={user.logo} style={styles.logo}/>
      <div style={styles.username}>{user.display_name}</div>
      <div style={styles.category}>{user.category}</div>
      </div>
    )
  })

  console.log('props.userInfo', props.userInfo,  props.userInfo.followedUser)

  return (
    <div style={styles.background}>
    <h3 style={styles.h3}>Followed Channels</h3>
     <div style={styles.div}>
     <img src={props.userInfo.followedLogo} style={styles.logo}/>
     <div style={styles.username}>{props.userInfo.followedUser}</div>
     <div style={styles.category}>{props.userInfo.followedCategory}</div>
     </div>
    <h3 style={styles.h3}>Recommended Channels</h3>
      {three}
    </div>
  )
}

const styles = {};


styles.div = {
  paddingTop: "10px"
}

styles.logo = {
  width: "15%",
  borderRadius: "4px",
  float: "left",
  paddingRight: "8px",
  paddingLeft: "6px"
}

styles.h3 = {
  fontSize: "15px",
  fontFamily: "Helvetica Neue",
  color: "#F8F8F8",
  paddingLeft: "15px",
  paddingTop: "5px",
  fontWeight: "400",
}

styles.username = {
  fontSize: "12px",
  fontFamily: "Helvetica Neue",
  color: "#F8F8F8",
  fontWeight: "400",
  paddingLeft: "15px",
  paddingTop: "8px"
}

styles.category = {
  fontSize: "11px",
  fontFamily: "Helvetica Neue",
  color: "#DCDCDC",
  fontWeight: "200",
  paddingLeft: "15px"
}

styles.background = {
  position: "absolute",
  top: "0px",
  left: "5px",
  background: "#181818",
  width: "250px",
  height: "700px",
  float: 'right'
}


export default SideBar;