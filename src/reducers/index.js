import commentReducer from './comments';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  comments : commentReducer
})

export default allReducers;