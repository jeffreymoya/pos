import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import createNetworkMiddleware from 'react-native-offline/src/redux/createNetworkMiddleware'
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable'
import epics from './epics'
import DatabaseService from '../../services/database'
import reducer from './slices'
import logger from 'redux-logger'

const configureAppStore = async (): Promise<EnhancedStore> => {
  const rxdb: DatabaseService = new DatabaseService()
  await rxdb.init()

  const epicMiddleware: EpicMiddleware<any, any, any> = createEpicMiddleware({
    dependencies: { rxdb },
  })

  const networkMiddleware = createNetworkMiddleware({
    queueReleaseThrottle: 200,
  })

  let enhancers: any[] = []
  let middleware: any[] = [networkMiddleware, epicMiddleware]

  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware).concat(logger),
    enhancers,
  })

  epicMiddleware.run(epics)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./shared/slices', () => store.replaceReducer(reducer))
  }

  return store
}

export default configureAppStore
