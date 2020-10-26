import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ResultShowScreen from './src/screens/ResultShowScreen';
import SearchScreen from './src/screens/SearchScreen';

const AppNavigator = createStackNavigator({
  Search: SearchScreen,
  Result: ResultShowScreen,
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Busines Search'
  }
});
export default createAppContainer(AppNavigator);