import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

// Combine all reducers
const reducers = combineReducers({
  form: formReducer,
  routing: routerReducer
});

export default reducers;
