import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Store from './store';

render(
  <App store={Store} />,
  document.getElementById('root')
);
