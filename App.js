import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import Home from './src/containers/Home';
import store from './src/store';

const theme = {};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <Home />
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
