import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from './Home/Home';
import Stream from './Stream/Stream';
import './Content.css';
import Redirect from 'react-router-dom/Redirect';

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
                <Route exact path='/' render={() => <Redirect to="/home" />} />
                <Route path='/home' component={Home} />
                <Route path='/stream/*' component={Stream} />
            </div>
        );
    }
}

export default Content;