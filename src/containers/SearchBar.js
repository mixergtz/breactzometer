import React from 'react'
import { connect } from 'react-redux'
import { selectLocation, fetchInfo } from '../actions/index'

let SearchBar = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(selectLocation(input.value))
        dispatch(fetchInfo(input.value))
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type='submit'>
          Search Air Quality
        </button>
      </form>
    </div>
  )
}

SearchBar = connect()(SearchBar)

export default SearchBar
