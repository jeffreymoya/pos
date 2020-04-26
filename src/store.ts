import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import reducers from './shared/slices'
import epics from './shared/epics'
import { createEpicMiddleware } from 'redux-observable'
import { db, initDB } from './shared/services/database'
import createNetworkMiddleware from 'react-native-offline/src/redux/createNetworkMiddleware'

const epicMiddleware = createEpicMiddleware({
  dependencies: {
    db: db,
  },
})

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
})

const store = configureStore({
  reducer: reducers,
  middleware: [networkMiddleware, epicMiddleware, ...getDefaultMiddleware()],
  enhancers: [],
})

epicMiddleware.run(epics)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./redux', () => store.replaceReducer(reducers))
}

// create local database
initDB()

export type AppDispatch = typeof store.dispatch

export default store
