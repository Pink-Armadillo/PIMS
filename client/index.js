import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/store';
import { Provider } from 'react-redux';
import styles from './scss/application.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
