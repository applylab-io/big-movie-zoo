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
                    <li><NavLink to="/home"><FontAwesome name="home" /> Home</NavLink></li>
                    <li><NavLink to="/originals"><FontAwesome name="camera-retro" /> Originals</NavLink></li>
                    <li>
                        <a href={`${process.env.REACT_APP_AWS_IMPLICIT_GRANT_ENDPOINT}?response_type=token&client_id=${process.env.REACT_APP_AWS_COGNITO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_AWS_COGNITO_CALLBACK_URL}`}>
                            <FontAwesome name="power-off" /> LogOff
                        </a>
                    </li>
                </ul>                
                <div className="Menu-bars-small">
                    <FontAwesome name="bars" />
                </div>                
            </div>
        );
    }
}

export default Menu;