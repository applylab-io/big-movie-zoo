import React, { Component } from 'react';
import Player from '../Player/Player';

/**
 * 
 * 
 * @class Stream
 * @extends {Component}
 */
class Stream extends Component {
    render() {
        return (
            <div>
                <div>
                    <Player />
                </div>
            </div>
        );
    }
}

export default Stream;