import React, { useEffect, useState, Fragment } from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import { Provider } from 'react-redux'
import Home from './src/features/HomeScreen'
import setup from './src/store'

const theme = {}

const App = () => {
  const [store, setStore] = useState(null)

  useEffect(() => {
    setup().then(createdStore => {
      console.dir('setup complete', createdStore)
      setStore(createdStore)
    })
  }, [])

  if (!store) {
    return <Fragment />
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <Home />
      </ThemeProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
})

export default App
