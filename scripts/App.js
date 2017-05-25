import React, { Component } from 'react';
import {
    HashRouter as Router,
    Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './scenes/Sign/Login';
import Home from './scenes/Home';
import './sass/app.scss';

export default class App extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}
