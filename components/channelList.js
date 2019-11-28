import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import Channel from './channel';


const data = require('../data.json');


export default class ChannelList extends Component {
  constructor(props) {
    super(),
    this.state = {
      data: data,
      watched: [],
      
    }
  }


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) =>
            <Channel
              id={item.id}
              name={item.name}
              imgURI={item.icon}
              onPress={() => navigate('Player', {id: item.id})}/>}
        />
      </View>
    );
  }
}



