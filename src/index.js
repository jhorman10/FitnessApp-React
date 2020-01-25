// const element = document.createElement('h1');

// element.innerHTML = 'Hello React';

// const container = document.getElementById('root');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App'

const container = document.getElementById('root');

ReactDOM.render(<App/> , container);