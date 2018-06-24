import React, { Component } from 'react';
import spinner from './favicon.png';
import './Spinner.css';
/**
 * 
 * 
 * @class Spinner
 * @extends {Component}
 */
class Spinner extends Component {
    render() {
        return (
            <div className="Spinner">
                <img src={spinner} alt="Spinner" />
            </div>
        );
    }
}

export default Spinner;