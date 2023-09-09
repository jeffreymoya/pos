import React from 'react'
import { StatusBar } from 'react-native'
import Providers from './Providers'

const App: React.FC = () => {
  return (
    <Providers>
      <StatusBar barStyle="dark-content" />
      <Home />
    </Providers>
  )
}

export default App
