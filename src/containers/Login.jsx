import React, { Component } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { connect } from 'react-redux';
import { userLogin } from '../actions';
import { authRef } from '../config/firebase';
import history from '../utils/history';

class Login extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(this.loginForm)
    const username = form.get('username');
    const password = form.get('password');
    this.props.login(username, password);
  };

  componentDidMount = () => {
    authRef.onAuthStateChanged(function (user) {
      if (user) {
        history.push('dashboard');
      }
    });
  }

  render() {
    return(
    <div className="Login">
      <div className="Login-container">
        <div className="Login-form">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit} ref={el => (this.loginForm = el)}>
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
            <Button>Login</Button>
            {this.props.errorMessage &&
              <h3>{this.props.errorMessage}</h3>
            }
          </form>
        </div>
      </div>
    </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (username, password) => {
    dispatch(userLogin(username, password))
  }
})

const mapStateToProps = state => {
  return {
    errorMessage: state.errorMessage
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);