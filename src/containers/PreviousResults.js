import { connect } from 'react-redux'
import ResultsTable from '../components/ResultsTable'

const mapStateToProps = (state) => {
  return {
    previousFiveLocations: Object.values(state.previousLocations).reverse().slice(0, 5)
  }
}

const PreviousResults = connect(
  mapStateToProps
)(ResultsTable)

export default PreviousResults
