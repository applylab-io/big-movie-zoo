import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.css';
import FontAwesome from 'react-fontawesome';
/**
 * 
 * 
 * @class Menu
 * @extends {Component}
 */
class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <ul>
                    <li><NavLink to="/"><FontAwesome name="home" /> Home</NavLink></li>
                    <li><NavLink to="/film"><FontAwesome name="film" /> Films</NavLink></li>
                    <li><NavLink to="/language"><FontAwesome name="language" /> By Language</NavLink></li>
                    <li><NavLink to="/originals"><FontAwesome name="camera-retro" /> Originals</NavLink></li>
                    <li><NavLink to="/tv"><FontAwesome name="tv" /> TV Programmes</NavLink></li>
                    <li><NavLink to="/profile"><FontAwesome name="user-circle" /> Profile</NavLink></li>
                </ul>
                <div className="Menu-bars-small">
                    <FontAwesome name="bars" />
                </div>
            </div>
        );
    }
}

export default Menu;