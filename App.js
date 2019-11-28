import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ChannelList from './components/channelList';
import Player from './components/player';

const MainNavigator = createStackNavigator({
  Home: {screen: ChannelList},
  Player: {screen: Player},
});

const App = createAppContainer(MainNavigator);

export default App;





