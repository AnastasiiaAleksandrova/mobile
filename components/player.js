import YouTube from 'react-native-youtube';
import React, { Component } from 'react';
import { keys } from '../keys';

export default class Player extends Component {

  constructor(props) {
    super()
    this.state = {
      error: null
    }
  }
  

  render() {
   
    return (
      <YouTube
        apiKey={keys.youtubeAPIkey}
        videoIds={this.props.navigation.getParam('playlist')} 
        play
        loop
        onError={e => this.setState({ error: e.error })}
        style={{ alignSelf: 'stretch', height: 300 }}
      /> 
    );
  }
}