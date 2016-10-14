import React from 'react';
import {render} from 'react-dom';

//import components
import App from './components/App';

//load favicon
require('./favicon.ico');

//import styles
import './styles/styles.css';

render(
  <App />,
  document.getElementById('app')
);
