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
    this.searchCards = this.searchCards.bind(this);
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

  searchCards (value) {
    let cards = document.getElementsByClassName('Card');

    Object.keys(cards).forEach( card => {
      let title = cards[card].children[0].children[0].innerHTML.toLowerCase();
      let body = cards[card].children[1].innerHTML.toLowerCase();

      if (title.includes(value) || body.includes(value)) {
        cards[card].style.display = 'inherit';
      } else {
        cards[card].style.display = 'none';
      }
    })
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <div className="App">
        <Header
          newCard={this.newCard}/>
        <Container
          cards={this.state.cards}
          updateCardQuality={this.updateCardQuality}
          removeCard={this.removeCard}
          searchCards={this.searchCards}/>
      </div>
    );
  }
}