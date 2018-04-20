import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/Home';
import Stream from './Stream/Stream';
import './Content.css';

/**
 * 
 * 
 * @class Content
 * @extends {Component}
 */
class Content extends Component {
    render() {
        return (
            <div className="Content">
                <Route exact path='/' component={Home} />
                <Route path='/test' component={Stream} />
                <Route path='/stream/*' component={Stream} />
            </div>
        );
    }
}

export default Content;