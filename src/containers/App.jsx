import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import { Switch, Route } from "react-router-dom";

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default App;
