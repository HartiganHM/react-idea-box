import React, { Component } from 'react';
import Container from './Container';
import Header from './Header';
import './styles/App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: localStorage
    }

    this.newCard = this.newCard.bind(this);
    this.updateCardQuality = this.updateCardQuality.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  newCard() {
    this.setState({
      cards: localStorage
    })
  }

  removeCard(id) {
    document.getElementById(id).remove();
    localStorage.removeItem(JSON.stringify(id));
  }

  updateCardQuality(direction, id) {
    Object.keys(localStorage).forEach( (card) => {
      if (card === JSON.stringify(id)) {
        let changedCard = JSON.parse(localStorage.getItem(card));
        direction === 'up' ? changedCard.quality++ : changedCard.quality--;
        localStorage.setItem(id, JSON.stringify(changedCard));
      }
    })

    this.setState({
      cards: localStorage
    })
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <div className="App">
        <Header newCard={this.newCard}/>
        <Container
          cards={this.state.cards}
          updateCardQuality={this.updateCardQuality}
          removeCard={this.removeCard}/>
      </div>
    );
  }
}