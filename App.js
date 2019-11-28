import React, { Component } from 'react';
import ChannelList from './components/channelList';


const data = require('./data.json');

export default class App extends Component {
  constructor(props) {
    super(),
    this.state = {
      data: data,
      watched: []
    }
  }

  startVideo = (id) => {
    console.log(`channel ${id} pressed`)
  }
  
  render() {
    return (
      <ChannelList data={this.state.data} onPress={this.startVideo}/>
    );
  }
}