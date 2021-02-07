import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components';
import {Navigator} from './src/routes';
import {store, persistor} from './src/store';
import theme from './src/themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor="#7C4993" barStyle="light-content" />
          <Navigator />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
