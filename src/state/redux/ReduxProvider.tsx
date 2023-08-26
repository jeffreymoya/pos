import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import configureAppStore from './store'
import { EnhancedStore } from '@reduxjs/toolkit'

const store: EnhancedStore = await configureAppStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const ReduxProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
