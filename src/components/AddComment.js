import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment, addReply } from '../actions/';
import uuid from 'react-uuid';

class AddComment extends Component {

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      enablePost : false,
      value: '',
      reply: {}
    };
  }
  

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
    // checking the state each time to avoid repetitive re-renders
    if (event.target.value === '' && this.state.enablePost){
      this.setState({
        enablePost: false
      });
    } 
    else if (event.target.value !== '' && !this.state.enablePost) {
      this.setState({
        enablePost: true
      });
    }
  }

  currentUser = window.localStorage.getItem('currentUser');
  picture = window.localStorage.getItem('currentUserPicture');

  handleSubmit = (event) => {
    var newComment = {
      id : uuid(),
        user: {
          name: this.currentUser,
          picture: this.picture
        },
        content: this.state.value,
        liked: false,
        likes: 0,
        timestamp: new Date(),
        replies: []
    }
    if(this.state.reply.isReply === true){
      delete newComment.replies;
      this.props.addReply(newComment, this.state.reply.parent);
    } else {
      this.props.addComment(newComment);
    }
    event.preventDefault();
    this.setState({
      value: '',
      enablePost: false,
      reply: {}
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.reply){
      if(prevProps.reply.isReply === false && this.props.reply.isReply === true){
        this.setState({
          reply: this.props.reply,
          value: '@' + this.props.reply.parent.user.name + ' '
        })
        // this.textInput.current.focus();
      } 
    }
  }
  

  onEnterPress = (event) => {
    if(event.keyCode === 13 && event.shiftKey === false) {
      this.handleSubmit(event);
    }
  }
 

  render() {
    
    return (
      <div>
        <hr class='addComSeparator'/>
        <div class='addComContainer'>
          <form onSubmit={this.handleSubmit}>
          <textarea 
            value={this.state.value}
            onKeyDown={this.onEnterPress} 
            onInput={this.handleChange} 
            class='addComInput' 
            placeholder='Add a comment...' 
            rows='1'
            ref={this.textInput}
          />
          <button class='postButton buttonStyle' type="submit" disabled={!this.state.enablePost}>Post</button>
          </form>
        </div>
      </div>
    );
  }
}

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  addReply: PropTypes.func.isRequired,
  comments: PropTypes.object.isRequired,
  reply: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  comments: state.comments.comments,
  reply: state.comments.reply,
})

export default connect(mapStateToProps, {addComment, addReply})(AddComment);