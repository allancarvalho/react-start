import {asyncRoute} from 'all-in-one';

import Home from './pages/home'; //rota no js principal
const About = asyncRoute(() => import('./pages/about')); //rota em bundle separado

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