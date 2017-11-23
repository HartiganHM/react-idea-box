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
        this.clearState = this.clearState.bind(this);
        this.saveData = this.saveData.bind(this);
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

    clearState() {
        this.setState({
            title:'',
            body:''
        })
    }

    saveData(event) {
        event.preventDefault();
        if (this.state.title && this.state.body) {
            localStorage.setItem(
                    Date.now(),
                    JSON.stringify(
                        {
                            title: this.state.title,
                            body: this.state.body,
                            quality: 0,
                            id: Date.now()
                        })
            )
            this.props.newCard();
            this.clearState();
        }
    }

    render() {
        return (
            <div className="Header">
                <h1 className="page-header"><span className="accent-color">ireact</span>box</h1>
                <form
                    className="submit-form"
                    onChange={this.handleInputChange}
                    onSubmit={this.saveData}>
                    <input
                        className="submit-input"
                        type="text" value={this.state.title}
                        placeholder="Title"/>
                    <textarea
                        className="submit-input" type="textarea"
                        value={this.state.body}
                        placeholder="Body"/>
                    <button
                        className="submit-input submit-button">Save</button>
                </form>
            </div>
        )
    }
}