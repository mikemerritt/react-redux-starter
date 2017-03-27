import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from './utils/devtools';

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
);

const store = createStore(rootReducer, {}, enhancer);

if (module.hot) {
  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers').default)
  );
}

export default store;
