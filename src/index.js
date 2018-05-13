import React from "react";
import ReactDOM from "react-dom";
import routes from './routes';
import {provider} from 'all-in-one';
import './styles/main.css';

const Provider = provider(routes);

const App = () => <Provider />;

ReactDOM.render(<App />, document.querySelector('#app'));