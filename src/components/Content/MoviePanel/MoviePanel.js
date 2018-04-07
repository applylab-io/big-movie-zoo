import React, {Component} from 'react';
import './MoviePanel.css';
import Deck from '../Deck/Deck';
import FontAwesome from 'react-fontawesome';

class MoviePanel extends Component {
    render() {
        return(
            <div className="Movie-panel">
                <h3><FontAwesome name={this.props.faName} />&nbsp;{this.props.title}</h3>
                <Deck />
            </div>
        );
    }
}

export default MoviePanel;