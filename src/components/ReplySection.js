import React, { Component } from 'react';
import Comment from './Comment';

class ReplySection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showReplies: false
    }
  }

  onClick = () => {
    this.setState({
      showReplies: !this.state.showReplies
    })
  }


  render() {
    return (
      <div class='replySection'>
        <div class='viewReplyContainer'>
          <button onClick={this.onClick} class='buttonStyle'>
            <div class='replyLine' ></div>
            <span class='viewReplies'>{this.state.showReplies ? 'Hide ' : 'View '} 
              Replies {!this.state.showReplies && '(' + this.props.replies.length + ')'}</span>
          </button>
        </div>
        {this.state.showReplies &&
          this.props.replies.map((comment) => 
            <Comment 
              username={comment.user.name} 
              picture={comment.user.picture}
              content={comment.content} 
              liked={comment.liked}
              likes={comment.likes}
              id={comment.id}
              timestamp={comment.timestamp}
              landscape
          />
          )
        }
      </div>
    );
  }
}

export default ReplySection;