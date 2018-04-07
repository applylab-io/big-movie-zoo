import React, {Component} from 'react';
import './Deck.css';
import Poster from '../Poster/Poster';
import targetVideo from '../../../videos/innovation.mp4';


let posters = [];
for (let index = 0; index < 10; index++) {
    const url = "https://picsum.photos/640/360?image=" + index;
    posters.push(<Poster thumbnail={url} key={index} target={targetVideo}/>);   
}


class Deck extends Component{
    render() {
        return(
            <section className="Deck">  
                {posters}
            </section>
        );
    }
}

export default Deck;