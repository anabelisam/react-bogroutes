import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = () => (
  <div className="Login">
    <div className="Login-container">
      <div className="Login-form">
        <h2>Login</h2>
        <form>
          <Input
            name="username"
            label="Username"
            type="email"
            placeholder="Username"
          />
          <Input
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
          />
          <Button>
            Login
          </Button>
        </form>
      </div>
    </div>
  </div>
);

export default Login;