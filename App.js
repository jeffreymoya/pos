import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { ThemeProvider } from 'react-native-elements';

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
    paddingTop: 10,
  },
});

export default App;
