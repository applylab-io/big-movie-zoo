import React, { Component } from 'react';
import './Footer.css';
/**
 * 
 * 
 * @class Footer
 * @extends {Component}
 */
class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="Legal">
                    <p>&copy; 2018 - Music Hub (India). All rights reserved. Website created and powered by <a href="http://applylab.io">Applylab.io</a></p>
                </div>
            </footer>
        );
    }
}

export default Footer;