import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import Home from './features/HomeScreen'
import { Providers } from './Providers'

const theme = {}

const App = () => {
  return (
    <Providers>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <Home />
      </ThemeProvider>
    </Providers>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
})

export default App
