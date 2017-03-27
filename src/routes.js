import App from './components/App/index';

// Pages
import Landing from './pages/Landing';

const Routes = {
  path: '/',
  component: App,
  indexRoute: { component: Landing }
};

export default Routes;
