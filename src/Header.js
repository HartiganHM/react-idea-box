import React, { Component } from 'react';
import './styles/Header.css';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            body: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        let value = event.target.value;

        if (event.target.type === 'textarea') {
            this.setState({
                body: value
            })
        } else {
            this.setState({
                title: value
            })
        }
    }

    render() {
        return (
            <div className="Header">
                <h1 className="page-header"><span className="accent-color">ireact</span>box</h1>
                <form className="submit-form">
                    <input className="submit-input" type="text" value={this.state.title} placeholder="Title" onChange={this.handleInputChange}/>
                    <textarea className="submit-input" type="textarea" value={this.state.body} placeholder="Body" onChange={this.handleInputChange}/>
                    <button className="submit-input submit-button" >Save</button>
                </form>
            </div>
        )
    }
}