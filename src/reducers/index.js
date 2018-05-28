import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import todo from './todo';

const reducers = combineReducers({
  todo,
  routing: routerReducer
});

export default reducers;