import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getComments } from '../actions/';

class CommentSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newComments : []
    };
  }

  componentDidMount() {
    this.props.getComments();
  }

  
  componentDidUpdate(prevProps, prevState) {
    var oldComments = prevProps.comments.comments;
    var newComments = this.props.comments.comments;
    if(oldComments && newComments){
      if(oldComments.length !== newComments.length){
        var addedComment = newComments[newComments.length -1]
        this.setState({
          newComments: this.state.newComments.concat(addedComment)
        })
      }
    }
  }
  
  comments = this.props.comments.comments;

  render() {
    var comments = this.comments
    if(this.props.landscape) {
      return (
        <div >
          {comments.map((comment) =>
            <Comment 
              username={comment.user.name} 
              picture={comment.user.picture}
              content={comment.content} 
              liked={comment.liked}
              likes={comment.likes}
              id={comment.id}
              replies={comment.replies}
              timestamp={comment.timestamp}
              landscape
            />
          )}
          {this.state.newComments.map((comment) =>
            <Comment 
              username={comment.user.name} 
              picture={comment.user.picture}
              content={comment.content} 
              liked={comment.liked}
              likes={comment.likes}
              id={comment.id}
              replies={comment.replies}
              timestamp={comment.timestamp}
              landscape
            />
          )}
        </div>
      );
    }

    
    // var comments = this.comments
    var viewMore = false;
    var numComments = comments.length;
    if (comments.length > 2) {
      comments = comments.slice(comments.length - 2);
      viewMore = true;
    }

    return (
      <div class='commentSection'>
        {viewMore && 
        <span class='viewAll' >View all {numComments} comments</span>
        }
        {comments.map((comment) =>
          <Comment 
            username={comment.user.name} 
            content={comment.content} 
            liked={comment.liked}
            id={comment.id}
          />
        )}
        {this.state.newComments.map((comment) =>
          <Comment 
            username={comment.user.name} 
            content={comment.content} 
            liked={comment.liked}
            id={comment.id}
        />
        )}
      </div>
    );
  }
}

CommentSection.propTypes = {
  getComments: PropTypes.func.isRequired,
  comments: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps, {getComments} )(CommentSection);

