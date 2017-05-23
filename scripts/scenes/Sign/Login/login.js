import React, { Component } from 'react';
import { Page, Toolbar, Button } from 'react-onsenui';

class Login extends Component {
  constructor(props) {
    super(props);
    this.renderToolbar = this.renderToolbar.bind(this);
  }
  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Login</div>
        <div className="right"><Button onClick={this.props.actions.loginClick}>Click</Button></div>
      </Toolbar>
    );
  }
  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        Login Page
      </Page>
    );
  }
}

export default Login;
