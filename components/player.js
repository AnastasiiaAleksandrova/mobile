import YouTube from 'react-native-youtube';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions';
import { keys } from '../keys';

class Player extends Component {

  constructor(props) {
    super(),
    this.state = {
      playing: null
    }  
  }

  setPlaying = () => {
    const playlist = this.props.navigation.getParam('playlist');
    let toPlay = playlist.filter(el => !this.props.seen.has(el));
    if (toPlay.length == 0) toPlay = playlist;
    this.setState({
      playing: toPlay.shift()
    }) 
  }

  checkEnd = (e) => {
    if (e.state === 'ended') {
      this.props.onEnd(this.state.playing);
      this.setPlaying();
    }
  }
  
  componentDidMount() {
    this.setPlaying()
  }

  render() {
    return (
      <YouTube
        apiKey={keys.youtubeAPIkey}
        videoId={this.state.playing} 
        play={true}
        onChangeState={e => this.checkEnd(e)}
        style={{ alignSelf: 'stretch', height: 300 }}
      /> 
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    seen: state.seen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEnd: (id) => dispatch(actionCreator.markAsSeen(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);