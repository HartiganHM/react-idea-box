import React, { Component } from 'react';
import Search from './Search';
import Card from './Card';
import './styles/Card.scss';

export default class Container extends Component {
    render () {
        return (
            <div>
                <h2>Put some stuff hurrrrrr</h2>
                <Search />
                <Card />
            </div>
        )
    }
}