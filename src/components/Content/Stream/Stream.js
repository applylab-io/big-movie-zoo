import React, { Component } from 'react';
import Player from '../Player/Player';
import promo from '../../../videos/innovation.mp4';

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
                    <Player videoFormat="video/mp4" videoSrc={promo} width="800px" height="450px"/>
                </div>
            </div>
        );
    }
}

export default Stream;