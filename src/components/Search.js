import React from 'react'

const Search = ({ searchDisabled, onSearchInput, onFormSubmit }) => {
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
          onFormSubmit(input.value)
        }}
        className="form-inline"
        >
          <div className="form-group">
            <input ref={node => {
              input = node
            }}
            className="form-control"
            onChange={e => {
              onSearchInput(!input.value.trim())
            }}
            />
          </div>
          <button
            type='submit'
            className="btn btn-success btn-md"
            disabled={searchDisabled}
          >
            Search Air Quality
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search
