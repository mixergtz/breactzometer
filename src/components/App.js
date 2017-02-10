import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from '../containers/SearchBar'
import SearchResults from '../containers/SearchResults'
import PreviousResults from '../containers/PreviousResults'

class App extends Component {
  render () {
    return (
      <div>
        <SearchBar />
        <SearchResults />
        <PreviousResults />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(App)
