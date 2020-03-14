import React, { Component } from 'react';

class LikesBar extends Component {
  render() {

    var likes = parseInt(window.localStorage.getItem('postLikes')).toLocaleString();

    return (
      <div>
        {parseInt(likes) > 0 &&
          <div class='likeBar'>
            <span class='boldtext' >{likes} like{parseInt(likes) > 1 && 's'}</span>
          </div>
        }
      </div>
    );
  }
}

export default LikesBar;