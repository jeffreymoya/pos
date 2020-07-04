import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createNetworkMiddleware from 'react-native-offline/src/redux/createNetworkMiddleware'
import { createEpicMiddleware } from 'redux-observable'
import epics from './shared/epics'
import DatabaseService from './shared/services/database'
import reducer from './shared/slices'

export default async () => {
  const rxdb: DatabaseService = new DatabaseService()
  await rxdb.init()

  const epicMiddleware = createEpicMiddleware({
    dependencies: { rxdb },
  })

  const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 200,
  })

  let enhancers = []
  let middleware = [
    networkMiddleware,
    epicMiddleware,
    ...getDefaultMiddleware(),
  ]

  const store = configureStore({
    reducer,
    middleware,
    enhancers,
  })

  epicMiddleware.run(epics)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./shared/slices', () => store.replaceReducer(reducer))
  }

  return store
}
