import React, { Component } from 'react';
import Card from './Card';
import './styles/Container.css';

export default class Container extends Component {
    render () {
        let reverseCards = this.props.cards.reverse();
        return (
            <div className="Container">
                <input className="submit-input" type="text" value="" placeholder="Search"/>
                {
                    reverseCards.map( (card, index) => {
                        return (
                            <Card
                                title={card.title}
                                body={card.body}
                                quality={card.quality}
                                id={card.id}
                                key={index}/>
                        )
                    })
                }
            </div>
        )
    }
}