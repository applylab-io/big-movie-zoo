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
    /**
     * Creates an instance of Home.
     * @param {any} props 
     * @memberof Home
     */
    constructor(props) {        
        super(props);
        this.state = {
            //TODO: Pull this from Dynamo DB
            categories: ['action', 'sci-fi', 'comedy', 'fantasy', 'romantic', 'superhero']
        }
    }

    /**
     * 
     * 
     * @returns 
     * @memberof Home
     */
    render() {
        //Filter and return movie panel components based on the category passed
        const moviePanels = this.state.categories.map((category, index) => <MoviePanel key={index} title={category.toUpperCase()}/>);
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