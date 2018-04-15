import React, {Component} from 'react';
import './MoviePanel.css';
import Deck from '../Deck/Deck';
import thumbnails from './thumbnails';

class MoviePanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            thumbnails: thumbnails
        }
    }
    render() {
        return(
            <div className="Movie-panel">
                <h3>{this.state.title}</h3>
                <Deck thumbnails={this.state.thumbnails} title={this.state.title}/>
            </div>
        );
    }
}

export default MoviePanel;