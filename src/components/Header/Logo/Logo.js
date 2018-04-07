import React, { Component } from 'react';
import logo from './bmz_new_logo.svg';
import './Logo.css'

/**
 * 
 * 
 * @class Logo
 * @extends {Component}
 */
class Logo extends Component {
    render() {
        return (
            <div className="Logo">
                <img src={logo} alt="logo" />
            </div>
        );
    }
}

export default Logo;