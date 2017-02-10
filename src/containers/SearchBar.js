import React from 'react'
import { connect } from 'react-redux'
import { selectLocation, fetchInfo } from '../actions/index'

let SearchBar = ({ dispatch }) => {
  let input

  return (
    <div className="jumbotron text-center">
      <div className="container">
        <h1>Hello, Air Quality!</h1>
        <p> Simple React + Redux app for air quality search using Breezometer API </p>
        <br />
        <p> Type a city below and see the results! </p>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(selectLocation(input.value))
          dispatch(fetchInfo(input.value))
        }}
        className="form-inline"
        >
          <div className="form-group">
            <input ref={node => {
              input = node
            }}
            className="form-control"
            />
          </div>
          <button type='submit' className="btn btn-success btn-md">
            Search Air Quality
          </button>
        </form>
      </div>
    </div>
  )
}

SearchBar = connect()(SearchBar)

export default SearchBar
