import React, { Component } from 'react';
import Card from './Card';
import './styles/Container.css';

export default class Container extends Component {
    render () {
        return (
            <div className="Container">
                <input className="submit-input" type="text" value="" placeholder="Search"/>
                <Card />
            </div>
        )
    }
}