import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import { loadState } from './utils/localStorage'

const loggerMiddleware = createLogger()
const persistedState = loadState()

export default function configureStore () {
  return createStore(
    rootReducer,
    persistedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}
