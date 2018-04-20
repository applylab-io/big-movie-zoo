import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import './Player.css'
import {constants} from './constants';

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
                width: constants.PLAYER_DEFAULT_WIDTH,
                height: constants.PLAYER_DEFAULT_HEIGHT                
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.videoSrc !== this.props.videoSrc) {
            this.setState({
                videoJsOptions: {
                    autoplay: true,
                    controls: true,
                    sources: [{
                        src: nextProps.videoSrc,
                        type: nextProps.videoFormat
                    }],
                    width: constants.PLAYER_DEFAULT_WIDTH,
                    height: constants.PLAYER_DEFAULT_HEIGHT                
                }                
            })
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