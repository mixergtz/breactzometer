import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../containers/SearchBar'
import SearchResults from '../containers/SearchResults'

class App extends Component {
  render () {
    return (
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(App)
