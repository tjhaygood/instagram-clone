import React, { Component } from 'react';
import UsernameBar from './UsernameBar';
import Picture from './Picture';
import ButtonsBar from './ButtonsBar';
import LikesBar from './LikesBar';
import TitleSection from './TitleSection';
import Timestamp from './Timestamp';
import CommentSection from './CommentSection';
import AddComment from './AddComment';
import '../css/card.css'

class Card extends Component{
  
  render() {
    var displayTitle = window.localStorage.getItem('postTitle') !== '';
    return (
      <div className="App" class='card'>
        <UsernameBar />
        <Picture />
        <div class='belowPicture'>
          <ButtonsBar />
          <LikesBar />
          { displayTitle && 
            <TitleSection />
          }
          <CommentSection />
          <Timestamp />
          <AddComment />
        </div>
      </div>
    );
  }
}

export default Card;