import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import theme from '../../themes/theme';

class TabNavigator extends React.PureComponent {
  render() {
    const {routs} = this.props;
    const TabNavigatorCreator = createMaterialTopTabNavigator(routs, {
      tabBarOptions: {
        gestureDirection: 'horizontal',
        swipeEnabled: true,
        tabBarPosition: 'top',
        lazy: true,
        activeTintColor: theme.colors.primary.main,
        inactiveTintColor: theme.colors.primary.dark,
        labelStyle: {
          fontSize: 15,
          fontFamily: theme.fonts.semibold,
          paddingTop: 0,
          opacity: 1,
        },
        style: {
          backgroundColor: theme.colors.light.main,
          opacity: 1,
        },
        tabStyle: {
          opacity: 1,
        },
        indicatorStyle: {
          backgroundColor: theme.colors.primary.main,
          height: 4,
        },
        upperCaseLabel: false,
      },
    });

    const ContainedTabNavigator = createAppContainer(TabNavigatorCreator);

    return <ContainedTabNavigator />;
  }
}

export default TabNavigator;
