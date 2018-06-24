import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import './Poster.css';
import FontAwesome from 'react-fontawesome';

class Poster extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const uuid = uuidv4();
        this.props.history.push({
            pathname: `/stream/${uuid}`,
            details: {
                target: this.props.target,
                title: this.props.title,
                genres: this.props.genres
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