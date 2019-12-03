import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import ChannelList from './components/channelList';
import Player from './components/player';

const store = createStore(reducer);

const MainNavigator = createStackNavigator({
  Home: {screen: ChannelList},
  Player: {screen: Player},
});

const Navigation = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}


