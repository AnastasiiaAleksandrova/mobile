import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default class Channel extends Component {

    render() {

    let src = {uri: this.props.imgURI};
    return (
        <TouchableWithoutFeedback onPress={this.props.onPress}>
            <View style={styles.view} id={this.props.id}>
                <Image source={src} style={styles.image} />
                <Text style={styles.text}>
                    {this.props.name}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginRight: 50
  },
  text: {
    fontSize: 20
  },
  view: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'grey',
      marginTop: 2,
      padding: 5
  }
});