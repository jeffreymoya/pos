import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';

import reducers from './reducers';
import epics from './epics';
import { createEpicMiddleware } from 'redux-observable';
import { DbService, initDatabase } from './services/dbService';
import createNetworkMiddleware from 'react-native-offline/src/redux/createNetworkMiddleware';

const epicMiddleware = createEpicMiddleware(epics, {
  dependencies: {
    db: DbService,
  },
});

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
})

const store = configureStore({
  reducer: reducers,
  middleware: [networkMiddleware, epicMiddleware, ...getDefaultMiddleware()],
  enhancers: [],
});


if (process.env.NODE_ENV !== 'production' && module.hot) {

  module.hot.accept('./reducers', () => store.replaceReducer(reducers));
}

// create local database
initDatabase();

export default store;
