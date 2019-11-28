import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import Channel from './channel';

export default class ChannelList extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => <Channel id={item.id} name={item.name} imgURI={item.icon} onPress={this.props.onPress}/>}
        />
      </View>
    );
  }
}

