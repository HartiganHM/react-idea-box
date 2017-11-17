import React, { Component } from 'react';
import './styles/Card.css';

export default class Card extends Component {
    render () {
        return (
            <div className="Card">
                <div className="card-top">
                    <span className="card-title">Example Idea 1</span>
                    <div className="card-button delete-button"></div>
                </div>

                <span className="card-body">Tiramisu carrot cake fruitcake gingerbread bear claw powder icing tootsie rool ice cream.</span>

                <div className="card-bottom">
                    <div className="card-button up-button"></div>
                    <div className="card-button down-button"></div>
                    <span className="quality">quality: <span className="card-quality">swill</span></span>
                </div>
            </div>
        )
    }
}