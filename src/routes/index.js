import React from 'react';

import {connect} from 'react-redux';
import {createReduxContainer} from 'react-navigation-redux-helpers';
import reducer from './reducer';
import AppNavigator from './routes';

const {navReducer, middleware} = reducer(AppNavigator);
const App = createReduxContainer(AppNavigator);

function AppReduxNavigator(props) {
  return <App {...props} />;
}

const mapStateToProps = (state) => ({state: state.nav});

const Navigator = connect(mapStateToProps)(AppReduxNavigator);

export {Navigator, navReducer, middleware};
