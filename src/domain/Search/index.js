import React from 'react';
import Header from '../../component/Header';
import {Container} from './style';
import TabNavigator from '../../component/Tabs';

import TabMain from './Tabs/Main/container';
import TabFavorites from './Tabs/Favorites/container';

const Search = (props) => {
  const getTabRoutes = () => {
    const tab = {};

    tab.Main = {
      screen: TabMain,
      navigationOptions: () => ({
        tabBarLabel: 'Pesquisar',
      }),
    };

    tab.Favorites = {
      screen: TabFavorites,
      navigationOptions: () => ({
        tabBarLabel: 'Favoritos',
      }),
    };

    return tab;
  };

  return (
    <Container>
      <Header title="OMDb - Anderson de Camargo" />
      <TabNavigator routs={getTabRoutes()} />
    </Container>
  );
};

export default Search;
