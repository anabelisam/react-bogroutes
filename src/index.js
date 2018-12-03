import React from 'react';
import ReactDOM from 'react-dom';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Dashboard />, document.getElementById('root'));
serviceWorker.unregister();
