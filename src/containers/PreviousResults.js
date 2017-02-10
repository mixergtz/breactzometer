import { connect } from 'react-redux'
import ResultsTable from '../components/ResultsTable'
import { clearState } from '../utils/localStorage'

const mapStateToProps = (state) => {
  return {
    previousFiveLocations: Object.values(state.previousLocations).reverse().slice(0, 5)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      clearState()
      location.reload();
    }
  }
}

const PreviousResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsTable)

export default PreviousResults
