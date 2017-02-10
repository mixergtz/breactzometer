import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import App from '../components/App'
import { saveState } from '../utils/localStorage'
import throttle from 'lodash/throttle'

const store = configureStore()

store.subscribe(throttle(() => {
  saveState({
    previousLocations: store.getState().previousLocations
  })
}, 1000))

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
