import React, { Component } from 'react';

class Picture extends Component {

  render() {

  var postPicture = window.localStorage.getItem('postPicture')

    return (
      // <div>
        <img class='picture' alt='' src={postPicture} />
      // </div>
    );
  }
}

export default Picture;