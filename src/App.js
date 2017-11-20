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

  updateCardQuality(card, direction) {
    if (direction === 'up' && card.quality < 2) {
      card.quality + 1
    } else if (direction === 'down' && card.quality > 0) {
      card.quality - 1;
    }
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <div className="App">
        <Header newCard={this.newCard}/>
        <Container
          cards={this.state.cards}
          updateCardQuality={this.updateCardQuality}/>
      </div>
    );
  }
}