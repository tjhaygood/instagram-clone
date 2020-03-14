export const addComment = (comment) => {
    return {
      type: 'ADD_COMMENT',
      payload: comment
    };
}

export const getComments = () => {
  return {
    type: 'GET_COMMENTS'
  }
}

export const toggleLikeComment = (comment) => {
  return {
    type: 'TOGGLE_LIKE_COMM',
    payload: comment
  }
}

export const triggerReply = (parent) => {
  return {
    type: 'SET_REPLY',
    payload: parent
  }
}

export const addReply = (comment, parent) => {
  return {
    type: 'ADD_REPLY',
    payload: [comment, parent]
  }
}