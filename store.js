import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';

import reducers from './redux';
import epics from './epics';
import { createEpicMiddleware } from 'redux-observable';
import { db, initDB } from './services/database';
import createNetworkMiddleware from 'react-native-offline/src/redux/createNetworkMiddleware';

const epicMiddleware = createEpicMiddleware();

const networkMiddleware = createNetworkMiddleware({
  queueReleaseThrottle: 200,
})

const store = configureStore({
  reducer: reducers,
  middleware: [networkMiddleware, epicMiddleware, ...getDefaultMiddleware()],
  enhancers: [],
});

epicMiddleware.run(epics, {
  dependencies: {
    db: db,
  },
});

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./redux', () => store.replaceReducer(reducers));
}

// create local database
initDB();

export default store;
