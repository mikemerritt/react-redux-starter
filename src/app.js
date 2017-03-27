import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Routes from './routes';

export default class App extends React.Component {
  static propTypes = {
    store: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={syncHistoryWithStore(browserHistory, this.props.store)}>
          {Routes}
        </Router>
      </Provider>
    );
  }
}
