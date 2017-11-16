import React, { Component } from 'react';
import './styles/Header.scss';

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
            <div>
                <h1>React Idea Box</h1>
                <form>
                    <input type="text" value="" placeholder="Body"/>
                    <input type="textarea" value="" placeholder="Body"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}