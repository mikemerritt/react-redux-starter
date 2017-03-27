import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Combine all reducers
const reducers = combineReducers({
  routing: routerReducer
});

export default reducers;
