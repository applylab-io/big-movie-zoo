import React, { Component } from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import './Player.css'
import promo from '../../../videos/innovation.mp4';

const videoJsOptions = {
    autoplay: true,
    controls: true,
    sources: [{
        src: promo,
        type: 'video/mp4'
    }],
    width: '1024px',
    height: '576px'
};

class Player extends Component {
    render() {
        return (
            <div className="Video-player">
                <VideoPlayer { ...videoJsOptions } />
            </div >
        );
    }
}

export default Player;