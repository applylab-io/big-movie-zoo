import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import './BrandingArea.css';

class BrandingArea extends Component {
    render() {
        return (
            <div className="Branding-Area">
                <Logo />
            </div>
        );
    }
}

export default BrandingArea;