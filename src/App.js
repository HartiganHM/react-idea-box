import React, { Component } from 'react';
import Container from './Container';
import Header from './Header';
import './styles/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: Object.keys(localStorage).map( (card) => {
        return JSON.parse(localStorage[card])
      })
    }

    this.newCard = this.newCard.bind(this);
  }

  newCard() {
    this.setState({
      cards: Object.keys(localStorage).map( (card) => {
        return JSON.parse(localStorage[card])
      })
    })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        <Header newCard={this.newCard}/>
        <Container cards={this.state.cards}/>
      </div>
    );

    return null;
  }
}