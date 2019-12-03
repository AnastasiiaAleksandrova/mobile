import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import Channel from './channel';
import { connect } from 'react-redux';

class ChannelList extends Component {
  constructor(props) {
    super()
  }
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <FlatList
          data={this.props.data}
          renderItem={({item}) =>
            <Channel
              id={item.id}
              name={item.name}
              imgURI={item.icon}
              onPress={() => navigate('Player', {playlist: item.playlist})}/>}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    seen: state.seen
  }
}

export default connect(mapStateToProps)(ChannelList);



