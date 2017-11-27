import React, { Component } from 'react';
import Card from './Card';
import './styles/Container.css';

export default class Container extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: ''
        }

        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    handleSearchChange(event) {
        let value = event.target.value;

        this.setState({
            searchValue: value
        })

        this.props.searchCards(value);
    }

    render () {
        let keys = Object.keys(this.props.cards);
        return (
            <div className="Container">
                <input
                    className="submit-input"
                    type="text"
                    value={this.state.searchValue}
                    placeholder="Search"
                    onChange={this.handleSearchChange}/>
                {
                    keys.reverse().map( (card, index) => {
                        let parsedCard = JSON.parse(this.props.cards[card])
                        return (
                            <Card
                                title={parsedCard.title}
                                body={parsedCard.body}
                                quality={parsedCard.quality}
                                id={parsedCard.id}
                                key={index}
                                updateCardQuality={this.props.updateCardQuality}
                                removeCard={this.props.removeCard}/>
                        )
                    })
                }
            </div>
        )
    }
}