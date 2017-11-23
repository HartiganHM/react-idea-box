import React, { Component } from 'react';
import './styles/Card.css';

export default class Card extends Component {
    constructor() {
        super();
        this.qualityArray = [ 'swill', 'plausible', 'genius'];
        this.state = {};
        this.qualityClick = this.qualityClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
    }

    deleteClick() {
        this.props.removeCard(this.props.id);
    }

    qualityClick(event) {
        if(event.target.className.includes('up') && this.props.quality < 2) {
            this.props.updateCardQuality('up', this.props.id);

        } else if (event.target.className.includes('down') && this.props.quality > 0) {
            this.props.updateCardQuality('down', this.props.id)
        }
    }

    render () {
        let { title, body, quality, id } = this.props;
        return (
            <div
                className="Card"
                id={id}
                onClick={this.qualityClick}>
                <div className="card-top">
                    <span className="card-title">{title}</span>
                    <div
                        className="card-button delete-button"
                        onClick={this.deleteClick}></div>
                </div>

                <span className="card-body">{body}</span>

                <div className="card-bottom">
                    <div className="card-button up-button"></div>
                    <div className="card-button down-button"></div>
                    <span className="quality">quality: <span className="card-quality">{this.qualityArray[quality]}</span></span>
                </div>
            </div>
        )
    }
}