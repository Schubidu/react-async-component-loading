import React, { Component } from 'react';

export class Hello3 extends Component {
  render() {
    const { name } = this.props;
    return <h1>Hello 3 {name}!!!</h1>;
  }
}
