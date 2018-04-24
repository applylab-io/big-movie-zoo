import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import constants from './constants';
import './Menu.css';
import FontAwesome from 'react-fontawesome';
/**
 * 
 * 
 * @class Menu
 * @extends {Component}
 */
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleClass: constants.HORIZONTAL_MENU_CSS_CLASS
        }
        this.handleSmallMenuClick = this.handleSmallMenuClick.bind(this);
    }

    handleSmallMenuClick() {
        if(this.state.toggleClass === constants.HORIZONTAL_MENU_CSS_CLASS || this.state.toggleClass === constants.EMPTY_STRING) {
            this.setState({
                toggleClass: constants.VERTICAL_MENU_CSS_CLASS
            });
        }
        else {
            this.setState({
                toggleClass: constants.EMPTY_STRING
            });
        }
    }

    render() {
        return (
            <div className = {`${constants.HORIZONTAL_MENU_CSS_CLASS} ${this.state.toggleClass}`} onClick = {this.handleSmallMenuClick}>
                <ul>
                    <li><NavLink to="/"><FontAwesome name="home" /> Home</NavLink></li>
                    <li><NavLink to="/originals"><FontAwesome name="camera-retro" /> Originals</NavLink></li>
                </ul>                
                <div className="Menu-bars-small">
                    <FontAwesome name="bars" />
                </div>                
            </div>
        );
    }
}

export default Menu;