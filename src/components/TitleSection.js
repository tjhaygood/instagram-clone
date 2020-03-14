import React, { Component } from 'react';
import { dateDiffString } from '../dateDifference';

class TitleSection extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }
  
  render() {
    // var partOne, partTwo;
    // console.log(this.state.title)
    // var title = this.state.title;
    // if (title && title.length > 119){
    //   partOne = title.substring(0, 120);
    //   partTwo = title.substring(119);
    // }

    // console.log(partOne + partTwo);


    var postTime = new Date(window.localStorage.getItem('postTime'));
    var timeSince = dateDiffString(postTime);;

    var posterName = window.localStorage.getItem('posterName');
    var postTitle = window.localStorage.getItem('postTitle');
    var profilePic = window.localStorage.getItem('profilePic');

    if(this.props.landscape){
      return (
        <div class='titleContainer'>
          <div class='leftPicture'>
            <img src={profilePic} class='profilePicture' alt='' />
          </div>
          <div class='commentBlock'>
            <span class='boldtext' >{posterName} </span>
            <span class='regtext'>{postTitle}</span>
            <div style={{paddingTop : '4px'}}>
              <span class='regtext commentTime'>{timeSince}</span>
            </div>
          </div>
          <br />
        </div>
      );
    }

    return (
      <div class='titleContainer'>
        <span class='boldtext' >{posterName} </span>
        <span class='regtext'>{postTitle}</span>
      </div>
    );
  }
}

export default TitleSection;