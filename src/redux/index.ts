import { combineReducers } from '@reduxjs/toolkit'
import orderReducer from './orders'
import itemReducer from './items'
import { reducer as network } from 'react-native-offline'

const rootReducer = combineReducers({
  orders: orderReducer,
  items: itemReducer,
  network,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
