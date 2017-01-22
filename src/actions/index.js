import fetch from 'isomorphic-fetch'

export const SELECT_LOCATION = 'SELECT_LOCATION'
export const REQUEST_INFO = 'REQUEST_INFO'
export const RECEIVE_INFO = 'RECEIVE_INFO'

export function selectLocation (location) {
  return { type: SELECT_LOCATION, location }
}

export function requestInfo (location) {
  return { type: REQUEST_INFO, location }
}

export function receiveInfo (location, json) {
  if (json.error) {
    return {
      type: RECEIVE_INFO,
      location,
      success: false,
      error: json.error.message
    }
  } else {
    return {
      type: RECEIVE_INFO,
      location,
      success: true,
      response: json,
      receivedAt: Date.now()
    }
  }
}

export function fetchInfo (location) {
  return function (dispatch) {
    dispatch(requestInfo(location))
    return fetch(`https://api.breezometer.com/baqi/?location=${location}&key=${process.env.REACT_APP_BREEZOMETER_API_KEY}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveInfo(location, json))
      )
  }
}
