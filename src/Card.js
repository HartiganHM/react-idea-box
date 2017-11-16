import React, { Component } from 'react';
import './styles/Card.css';

export default class Card extends Component {
    render () {
        return (
            <div className="Card">
                <div>
                    <span>Title</span>
                    <img className="card-button" src={require("./images/delete.svg")} alt="delete idea button"/>
                </div>

                <span>Body</span>

                <div>
                    <img className="card-button" src={require("./images/upvote.svg")} alt="upvote idea button"/>
                    <img className="card-button" src={require("./images/downvote.svg")} alt="downvote idea button"/>
                    <span>quality: <span>normal</span></span>
                </div>
            </div>
        )
    }
}