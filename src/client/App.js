// @flow

import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

type Props = {};

type State = {
  username: any,
}

export default class App extends Component<Props, State> {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
