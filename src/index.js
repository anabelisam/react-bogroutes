import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store/configureStore';
import { Provider } from 'react-redux';
import history from './utils/history';

ReactDOM.render(
  (<Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
  ),
  document.getElementById('root'));
serviceWorker.unregister();
