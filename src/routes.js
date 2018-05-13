import {asyncRoute} from 'all-in-one';
import Home from './pages/home';

const About = asyncRoute(() => import('./pages/about'));

const routes = [
  { path: '/',
    exact: true,
    component: Home
  },
  { path: '/sobre',
    component: About,
  }
];

export default routes;