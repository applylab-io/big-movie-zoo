import React, { Component } from 'react';
import MoviePanel from '../MoviePanel/MoviePanel';
import './Home.css';

/**
 * 
 * 
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
    render() {
        return (
            <div>
                <div className="Home">
                    <MoviePanel title="Trending" faName="fire" />
                    <MoviePanel title="Recommended" faName="thumbs-up" />
                    <MoviePanel title="Big Movie Zoo Originals" faName="camera-retro" />
                </div>
            </div>
        );
    }
}

export default Home;