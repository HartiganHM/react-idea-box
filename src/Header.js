import React, { Component } from 'react';
import './styles/Header.css';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }
    }
    render() {
        return (
            <div className="Header">
                <h1 className="page-header"><span className="accent-color">ireact</span>box</h1>
                <form className="submit-form">
                    <input className="submit-input" type="text" value="" placeholder="Title"/>
                    <textarea className="submit-input" type="textarea" value="" placeholder="Body"/>
                    <button className="submit-input submit-button" >Save</button>
                </form>
            </div>
        )
    }
}