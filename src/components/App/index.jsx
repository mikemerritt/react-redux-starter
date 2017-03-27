import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import DevTools from '../../utils/devtools';

class App extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  };

  render() {
    return (
      <div>
        <Helmet title="react-redux-starter" />
        {this.props.children}
        <DevTools />
      </div>
    );
  }
}

export default App;
