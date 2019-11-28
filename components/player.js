import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Player extends Component {

  constructor(props) {
    super()
  }

  render() {
    return (
      <View>
        <Text>Play</Text>
        <Text>{this.props.navigation.getParam('playlist')}</Text>
      </View>
    );
  }
}