import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Search from '../domain/Search/container';

const AppStack = createStackNavigator(
  {Search},
  {
    initialRouteName: 'Search',
    headerMode: 'none',
  },
);

const Routes = createSwitchNavigator(
  {App: AppStack},
  {initialRouteName: 'App'},
);

export default createAppContainer(Routes);
