import React, { Component } from 'react';
import './styles/Card.css';

export default class Card extends Component {
    constructor() {
        super();
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if(event.target.className.includes('delete')) {
            document.getElementById(this.props.id).remove();
            localStorage.removeItem(JSON.stringify(this.props.id));
        }
    }

    render () {
        let { title, body, quality, id } = this.props;
        return (
            <div
                className="Card"
                id={id}
                onClick={this.handleClick}>
                <div className="card-top">
                    <span className="card-title">{title}</span>
                    <div className="card-button delete-button"></div>
                </div>

                <span className="card-body">{body}</span>

                <div className="card-bottom">
                    <div className="card-button up-button"></div>
                    <div className="card-button down-button"></div>
                    <span className="quality">quality: <span className="card-quality">{quality}</span></span>
                </div>
            </div>
        )
    }
}