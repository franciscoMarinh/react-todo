import { persistStore, persistReducer } from 'redux-persist'
import { createStore, applyMiddleware } from 'redux'
import { persistConfig } from './commons/config/persist.config'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

import rootReducer from './ducks'

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export { store, persistor }
