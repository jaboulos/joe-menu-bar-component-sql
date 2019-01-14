import React from 'react';

const SideBar = (props) => {
  const channelsInfo = props.userInfo.channels;
  let recommendedChannelOneLogo;
  let recommendedChannelTwoLogo;
  let recommendedChannelThreeLogo;
  let recommendedChannelOneCategory;
  let recommendedChannelTwoCategory;
  let recommendedChannelThreeCategory;
  let recommendedChannelOneDisplayName;
  let recommendedChannelTwoDisplayName;
  let recommendedChannelThreeDisplayName;

  if(channelsInfo){
    recommendedChannelOneLogo = channelsInfo[0].logo;
    recommendedChannelTwoLogo = channelsInfo[1].logo;
    recommendedChannelThreeLogo = channelsInfo[2].logo;
    recommendedChannelOneCategory = channelsInfo[0].category;
    recommendedChannelTwoCategory = channelsInfo[1].category;
    recommendedChannelThreeCategory = channelsInfo[2].category;
    recommendedChannelOneDisplayName = channelsInfo[0].display_name;
    recommendedChannelTwoDisplayName = channelsInfo[1].display_name;
    recommendedChannelThreeDisplayName = channelsInfo[2].display_name;
  }

  console.log(channelsInfo)

    return (
      <div style={styles.background}>
        <h3 style={styles.h3}>Followed Channels</h3>
        <div style={styles.div}>
          <img src={props.userInfo.followedLogo} style={styles.logo}/>
          <div style={styles.username}>{props.userInfo.followedUser}</div>
          <div style={styles.category}>{props.userInfo.followedCategory}</div>
        </div>
        <h3 style={styles.h3}>Recommended Channels</h3>
        <div>
        <div style={styles.div}>
          <img src={recommendedChannelOneLogo} style={styles.logo}/>
          <div style={styles.username}>{recommendedChannelOneDisplayName}</div>
          <div style={styles.category}>{recommendedChannelOneCategory}</div>
        </div>
        <div style={styles.div}>
          <img src={recommendedChannelTwoLogo} style={styles.logo}/>
          <div style={styles.username}>{recommendedChannelTwoDisplayName}</div>
          <div style={styles.category}>{recommendedChannelTwoCategory}</div>
        </div>
        <div style={styles.div}>
          <img src={recommendedChannelThreeLogo} style={styles.logo}/>
          <div style={styles.username}>{recommendedChannelThreeDisplayName}</div>
          <div style={styles.category}>{recommendedChannelThreeCategory}</div>
        </div>
        </div>
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