import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store/configureStore';
import { Provider } from 'react-redux';

ReactDOM.render(
  (<BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  ),
  document.getElementById('root'));
serviceWorker.unregister();
