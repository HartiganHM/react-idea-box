import React, { Component } from 'react';
import './styles/Card.css';

export default class Card extends Component {
    render () {
        return (
            <div className="Card" id={this.props.id}>
                <div className="card-top">
                    <span className="card-title">{this.props.title}</span>
                    <div className="card-button delete-button"></div>
                </div>

                <span className="card-body">{this.props.body}</span>

                <div className="card-bottom">
                    <div className="card-button up-button"></div>
                    <div className="card-button down-button"></div>
                    <span className="quality">quality: <span className="card-quality">{this.props.quality}</span></span>
                </div>
            </div>
        )
    }
}