import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './Poster.css';
import FontAwesome from 'react-fontawesome';

class Poster extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push("/stream");
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