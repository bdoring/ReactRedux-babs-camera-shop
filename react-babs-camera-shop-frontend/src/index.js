import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Store from './store.js';
import { Provider } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.css';


let store = Store();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
