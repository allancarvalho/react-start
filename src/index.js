import React from "react";
import ReactDOM from "react-dom";
import routes from './routes';
import {provider} from 'all-in-one';
import './styles/main.css';
import reducers from './reducers';

const Provider = provider(routes, reducers);
console.log(Provider)
const App = () => <Provider />;

ReactDOM.render(<App />, document.querySelector('#app'));