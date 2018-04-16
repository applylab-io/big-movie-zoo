import React, { Component } from 'react';
import Player from '../Player/Player';
import promo from '../../../videos/innovation.mp4';
import MoviePanel from '../MoviePanel/MoviePanel';
import './Stream.css';

/**
 * 
 * 
 * @class Stream
 * @extends {Component}
 */
class Stream extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: this.props.location.details.target,
            title: this.props.location.details.title,
            genres: this.props.location.details.genres
        }
    }
    render() {
        const moviePanels = this.state.genres.map((genre, index) => <MoviePanel title={genre.toUpperCase()}/>);
        return (
            <div>
                <div className="Stream">
                    <h1>{this.state.title}</h1>
                    <Player videoFormat="video/mp4" videoSrc={this.state.target?this.state.target:promo}/>
                    <section className="MoviePanel-container">
                        <h3>Suggested movies for you</h3>
                        {moviePanels}
                    </section>
                </div>
            </div>
        );
    }
}

export default Stream;