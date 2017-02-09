import { connect } from 'react-redux'
import ResultMessage from '../components/ResultMessage'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    selectedCity: state.selectedCity,
    previousLocations: state.previousLocations
  }
}

const SearchResults = connect(
  mapStateToProps
)(ResultMessage)

export default SearchResults
