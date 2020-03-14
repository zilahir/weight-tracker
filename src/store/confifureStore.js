import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import chart from './reducers/chart'
import weight from './reducers/weights'

const persistConfig = {
	key: 'root',
	storage,
}

const rootReducer = combineReducers({
	weight,
	chart,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store)
