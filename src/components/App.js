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
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1 col-md-8 col-md-offset-2">
              <SearchResults />
              <PreviousResults />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(App)
