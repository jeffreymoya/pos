import {configureStore, getDefaultMiddleware} from 'redux-starter-kit';

import reducers from './reducers';
import epics from './epics';
import {createEpicMiddleware} from 'redux-observable';
import {DbService, initDatabase} from './services/dbService';

initDatabase();

const epicMiddleware = createEpicMiddleware(epics, {
  dependencies: {
    db: DbService
  }
});

const store = configureStore({
  reducer: reducers,
  middleware: [epicMiddleware, ...getDefaultMiddleware()],
  enhancers: []
});

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
}

export default store;
