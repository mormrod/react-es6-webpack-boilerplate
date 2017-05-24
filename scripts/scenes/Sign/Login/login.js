import React, { Component } from 'react';
import { Page, Input, Button, Icon } from 'react-onsenui';
import './login.scss';

class Login extends Component {
  render() {
    return (
      <Page modifier="login">
        <div className="login-container">
          <div className="login-form">
            <p><Icon icon="ion-ios-body" /><Icon icon="ion-ios-body" /><Icon icon="ion-ios-body" /><br />Sportz Connect</p>
            <Input type="email" modifier="material" float placeholder="Email" value="" />
            <Input type="password" modifier="material" float placeholder="Password" value="" />
            <Button modifier="large" className="login-button">Log In</Button>
            <Button modifier="quiet" className="forgot-password">Forgot password?</Button>
          </div>
        </div>
      </Page>
    );
  }
}

export default Login;
