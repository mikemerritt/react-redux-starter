import App from './components/App';

// Pages
import Landing from './pages/Landing';

const Routes = {
  path: '/',
  component: App,
  indexRoute: { component: Landing }
};

export default Routes;
