import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { selectLocation, fetchInfo } from './actions/index'
import rootReducer from './reducers/index'
import { loadState, saveState } from './utils/localStorage'

const loggerMiddleware = createLogger()
const persistedState = loadState()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(selectLocation('Paris, France'))
store.dispatch(fetchInfo('Paris, France')).then(() =>
  console.log(store.getState())
)
store.dispatch(fetchInfo('Berlin, Germany')).then(() =>
  console.log(store.getState())
)

store.dispatch(fetchInfo('Medellin, Antioquia, Colombia')).then(() =>
  console.log(store.getState())
)
