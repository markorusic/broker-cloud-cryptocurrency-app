import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import authReducer from './modules/auth/reducer'

const rootReducer = combineReducers({
  auth: authReducer
})

const middlewares = [thunkMiddleware]

if (__DEV__ === true) {
  middlewares.push(createLogger())
}

export default createStore(rootReducer, {}, applyMiddleware(...middlewares))
