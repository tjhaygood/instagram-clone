import React, { Component } from 'react';
// import '../index.css'

class UsernameBar extends Component {
  render() {

    // const gradientBorder = {
    //     background: 
    //      'linear-gradient(to right, #9c20aa, #fb3570) border-box',
    //     padding:'2px',
    //     border: '2px solid transparent',
    //     borderRadius:'50%',
    //     display:'inline-block',
    // }

    var username = window.localStorage.getItem('posterName')
    var profilePic = window.localStorage.getItem('profilePic')
    var storyActive = JSON.parse(window.localStorage.getItem('storyActive'));

    return (
      <div>
        {/* <div style={gradientBorder}> */}
        {/* </div> */}
        <div class='usernameBar'>
          <div class='nameAndPicture'>
            <img style={storyActive ? {border: '2px solid red'} : {}} src={profilePic} class='profilePicture' alt='' />
            <span class='boldtext' >{username}</span>
          </div>
          <div class='moreOptions'>
            <svg xmlns="http://www.w3.org/2000/svg" aria-label="More options" class="_8-yf5 " fill="#262626" height="16" viewBox="0 0 48 48" width="16"><circle clip-rule="evenodd" cx="8" cy="24" fill-rule="evenodd" r="4.5" stroke="none" fill="#262626" stroke-width="1px"></circle><circle clip-rule="evenodd" cx="24" cy="24" fill-rule="evenodd" r="4.5" stroke="none" fill="#262626" stroke-width="1px"></circle><circle clip-rule="evenodd" cx="40" cy="24" fill-rule="evenodd" r="4.5" stroke="none" fill="#262626" stroke-width="1px"></circle></svg>
          </div>
        </div>
      </div>
    );
  }
}

export default UsernameBar;