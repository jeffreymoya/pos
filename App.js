import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { ThemeProvider } from 'react-native-elements';
import Constants from 'expo-constants';

const theme = {};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView />
      </ThemeProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
  },
});

export default App;
