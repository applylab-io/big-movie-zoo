import React, { Component } from 'react';
import Menu from './Menu/Menu';
import Logo from './Logo/Logo';
import BrandingArea from './BrandingArea/BrandingArea';
import './Header.css';
/**
 * 
 * 
 * @class Header
 * @extends {Component}
 */
class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="Container">
                    <BrandingArea />
                    <Menu />
                </div>
            </header>
        );
    }
}

export default Header;