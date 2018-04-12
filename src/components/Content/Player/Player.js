import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import './Player.css'

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoJsOptions: {
                autoplay: false,
                controls: true,
                sources: [{
                    src: this.props.videoSrc,
                    type: this.props.videoFormat
                }],
                width: this.props.width,
                height: this.props.height                
            }
        }
    }

    render() {
        return (
            <div className="Player">
                <VideoPlayer { ...this.state.videoJsOptions } />
            </div >
        );
    }
}

export default Player;