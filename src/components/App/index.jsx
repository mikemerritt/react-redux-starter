import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

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
      </div>
    );
  }
}

export default App;
