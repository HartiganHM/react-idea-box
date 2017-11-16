import React, { Component } from 'react';
import Container from './Container';
import Header from './Header';
import './styles/App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
      </div>
    );
  }
}