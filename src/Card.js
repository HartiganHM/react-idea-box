import React, { Component } from 'react';
import './styles/Card.css';

export default class Card extends Component {
    constructor() {
        super();
        this.qualityArray = [ 'swill', 'plausible', 'genius'];
        this.state = {
            index: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let indexVal = this.state.index;
        let newIndex;

        if(event.target.className.includes('delete')) {
            document.getElementById(this.props.id).remove();
            localStorage.removeItem(JSON.stringify(this.props.id));
        }

        if(event.target.className.includes('up') && this.state.index < 2) {
            newIndex = indexVal + 1
            this.setState({
                index: newIndex,
            })
            console.log(this.state);

        } else if (event.target.className.includes('down') && this.state.index > 0) {
            newIndex = indexVal - 1
            this.setState({
                index: newIndex,
            })
            console.log(this.state);
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
                    <span className="quality">quality: <span className="card-quality">{this.qualityArray[this.state.index]}</span></span>
                </div>
            </div>
        )
    }
}