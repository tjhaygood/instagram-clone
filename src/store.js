import { createStore } from 'redux';
import allReducer from './reducers';

const initialState = {}

var myStore = createStore(allReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default myStore;