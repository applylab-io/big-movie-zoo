import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './VideoPlayer.css';

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  stepUp() {
    let counter = this.state.counter;
    this.setState({
      counter: counter + 1
    })
  }

  componentDidMount() {
    this.stepUp();
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.sources[0].src !== this.props.sources[0].src) {
      this.stepUp();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.counter !== prevState.counter) {
      if(this.player) {
        this.player.dispose();
      }
      this.player = videojs(this.videoNode, this.props);
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div data-vjs-player className="Video-player" key={this.state.counter}>
        <video ref={node => this.videoNode = node} className="video-js"></video>
      </div>
    )
  }
}

export default VideoPlayer;