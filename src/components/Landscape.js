import React, { Component } from 'react';
import UsernameBar from './UsernameBar';
import Picture from './Picture';
import ButtonsBar from './ButtonsBar';
import LikesBar from './LikesBar';
import TitleSection from './TitleSection';
import Timestamp from './Timestamp';
import CommentSection from './CommentSection';
import AddComment from './AddComment';
import '../css/landscape.css'

class Landscape extends Component {
  render() {
    var displayTitle = window.localStorage.getItem('postTitle') !== '';
    return (
      <div className="App" class='landscape border' >
        <Picture />
        <div class='infoColumn'>
          <UsernameBar />
          <div class='belowUsername'>
            <div class='commentSection'>
              {displayTitle &&
                <TitleSection landscape />
              }
              <CommentSection landscape />
            </div>
          </div>
          <div class='bottom'>
            <ButtonsBar />
            <LikesBar />
            <Timestamp />
            <AddComment />
          </div>
        </div>
      </div>
    );
  }
}

export default Landscape;