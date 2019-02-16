import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './modules/auth/reducer'
import marketReducer from './modules/market/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  market: marketReducer
})

const middlewares = [thunkMiddleware]

if (__DEV__ === true) {
  middlewares.push(createLogger())
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(...middlewares)
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
