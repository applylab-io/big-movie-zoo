import React, {Component} from 'react';
import './Deck.css';
import Poster from '../Poster/Poster';

class Deck extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title.toLowerCase(),
            thumbnails: this.props.thumbnails
        }
    }
    render() {
        const posters = this.state.thumbnails
        .filter((movie) => movie.categories.indexOf(this.state.title) > -1)
        .map((thumbnail, index) => <Poster thumbnail={thumbnail.url} key={index} target={thumbnail.target} title={thumbnail.title} genres={thumbnail.categories} />);
        return(
            <section className="Deck">  
                {posters}
            </section>
        );
    }
}

export default Deck;