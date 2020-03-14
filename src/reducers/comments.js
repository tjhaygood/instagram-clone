import uuid from 'react-uuid';

const initialState = {
  reply: {
    isReply: false,
    parent: {}
  },
  comments: [
    {
      id: uuid(), 
      user: {
        name: 'grappling_science',
        picture: 'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/s150x150/12362474_1560222637602404_1783086828_a.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=pjV6F_gRGz0AX8eAEoH&oh=2243a14ec742e656e3d307ad69ccbbde&oe=5E9B75EB'
      }, 
      content: 'I bought all the toilet paper in a 45 mile radius. Am I doing it right?', 
      liked: false,
      likes: 135,
      timestamp: new Date('03-10-2020'),
      replies: []
    },
    {
      id: uuid(), 
      user: {
        name: 'vinnyguadagnino',
        picture: 'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/s150x150/88290609_826895277828579_3142523417526272000_n.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=81O8iNlqEjYAX_55MLq&oh=da3276002f3dcc2ca85a2e98b1c91d56&oe=5EA4E308'
      }, 
      content: 'Thank you !!!', 
      liked: false,
      likes: 61,
      timestamp: new Date('03-12-2020'),
      replies: []
    },
    {
      id: uuid(), 
      user: {
        name: 'skerp',
        picture: 'https://scontent-sjc3-1.cdninstagram.com/v/t51.2885-19/s150x150/20226071_337331040028803_2508017423462957056_a.jpg?_nc_ht=scontent-sjc3-1.cdninstagram.com&_nc_ohc=qPU7ZQqwiTMAX8O7l8o&oh=13606e49c0b4ab1687c7e9e0802cf20b&oe=5EA3288A'
      }, 
      content: 'Joe out here doing the work we need done', 
      liked: false,
      likes: 89,
      timestamp: new Date('03-10-2020'),
      replies: []
    },
  ]
}

const commentReducer = function(state = initialState, action) {
  var newComments;
  var newComment;
  switch (action.type) {
    case 'ADD_COMMENT':
      newComment = action.payload;
      newComment.id = uuid();
      newComment.liked = false;
      newComments = state.comments.concat(action.payload);
      return {
        ...state,
        comments : newComments
      };
    case 'GET_COMMENTS':
      return {
        ...state
      }
    case 'TOGGLE_LIKE_COMM':
      var id = action.payload;
      newComments = state.comments.map((comment) => {
        if(comment.id === id){ 
          comment.liked = !comment.liked;
          if(comment.liked) comment.likes = comment.likes + 1;
          else comment.likes = comment.likes - 1;
        }
        var replies = comment.replies;
        if(replies.length > 0) {
          for(var i=0; i < replies.length; i++){
            if(replies[i].id === id){
              replies[i].liked = !replies[i].liked;
              if(replies[i].liked) replies[i].likes = replies[i].likes + 1;
              else replies[i].likes = replies[i].likes - 1;
              break;
            }
          }
        }
        return comment
      });
      return {
        ...state,
        comments: newComments
      }
    case 'SET_REPLY':
      return {
        ...state,
        reply: {
          isReply: true,
          parent: action.payload
        }
      }
    case 'ADD_REPLY':
      newComment = action.payload[0];
      var parent = action.payload[1];
      newComments = state.comments.map((comment) => {
        if(comment.id === parent.id){
          comment.replies.push(newComment);
        }
        var replies = comment.replies;
        if(replies.length > 0) {
          for(var i=0; i < replies.length; i++){
            if(replies[i].id === parent.id){
              replies.push(newComment);
              break;
            }
          }
        }
        return comment;
      });
      return {
        ...state,
        reply: {
          isReply: false,
          parent: {}
        },
        comments: newComments
      }
    default:
      return state;
  }
}

export default commentReducer;