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
    constructor(props) {
        super(props);
        this.state = {
            //TODO: Pull this from Dynamo DB
            categories: ['action', 'sci-fi', 'comedy', 'fantasy', 'romantic', 'superhero']
        }
    }

    render() {
        const moviePanels = this.state.categories.map((category, index) => <MoviePanel title={category.toUpperCase()}/>);
        return (
            <div>
                <div className="Home">
                    {moviePanels}
                </div>
            </div>
        );
    }
}

export default Home;