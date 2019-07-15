import {configureStore, getDefaultMiddleware} from 'redux-starter-kit'

import rootReducer from './reducers'
import {createEpicMiddleware} from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [epicMiddleware, ...getDefaultMiddleware()],
    enhancers: []
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
}

export default store