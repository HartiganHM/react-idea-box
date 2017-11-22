import React, { Component } from 'react';
import Card from './Card';
import './styles/Container.css';

export default class Container extends Component {
    render () {
        let keys = Object.keys(this.props.cards);
        return (
            <div className="Container">
                <input className="submit-input" type="text" value="" placeholder="Search"/>
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