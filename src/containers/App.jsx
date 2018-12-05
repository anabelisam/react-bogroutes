import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import { Switch, Route } from "react-router-dom";

const App = () => (
  <Switch>
    <Route path="/" exact name="Home" component={Home} />
    <Route path="/login" exact name="Login" component={Login} />
    <Route path="/dashboard" exact name="dashboard" component={Dashboard} />
  </Switch>
);

export default App;
