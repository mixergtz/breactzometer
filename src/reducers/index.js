import { combineReducers } from 'redux'
import { SELECT_LOCATION, REQUEST_INFO, RECEIVE_INFO, ENABLE_SEARCH } from '../actions/index.js'
import { slugify } from '../utils/utils.js'

function selectedCity (state = '', action) {
  switch (action.type) {
    case SELECT_LOCATION:
      return action.location
    default:
      return state
  }
}

function locations (state = {
  name: '',
  isFetching: false,
  locationData: {
    color: "#eee",
    quality: "No data"
  },
  error: ''
}, action) {
  switch (action.type) {
    case REQUEST_INFO:
      return Object.assign({}, state, {
        name: action.location,
        isFetching: true
      })
    case RECEIVE_INFO:
      if (action.success) {
        return Object.assign({}, state, {
          isFetching: false,
          locationData: {
            color: action.response.breezometer_color,
            quality: action.response.breezometer_description
          }
        })
      } else {
        return Object.assign({}, state, {
          isFetching: false,
          error: action.error
        })
      }
    default:
      return state
  }
}

function previousLocations (state = {}, action) {
  switch (action.type) {
    case REQUEST_INFO:
    case RECEIVE_INFO:
      return Object.assign({}, state, {
        [slugify(action.location)]: locations(state[slugify(action.location)], action)
      })
    default:
      return state
  }
}

function searchDisabled (state = true, action) {
  switch (action.type) {
    case ENABLE_SEARCH:
      return action.value
    default:
      return state
  }
}


const rootReducer = combineReducers({
  selectedCity,
  searchDisabled,
  previousLocations
})

export default rootReducer
