import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Poster.css';
import FontAwesome from 'react-fontawesome';

class Poster extends Component{
    constructor(props) {
        super(props);
        this.state = {
            target: this.props.target,
            title: this.props.title,
            genres: this.props.genres
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push({
            pathname: '/stream',
            details: {
                target: this.state.target,
                title: this.state.title,
                genres: this.state.genres
            }
        });
    }

    render() {
        return(
            <div className="Poster" onClick={this.handleClick}>
                <img src={this.props.thumbnail} alt="No Content" />
                <span className="Play"><FontAwesome name="play-circle" /></span>
            </div>
        );
    }
}

export default withRouter(Poster);