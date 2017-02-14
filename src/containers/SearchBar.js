import { connect } from 'react-redux'
import Search from '../components/Search'
import { enableSearch, selectLocation, fetchInfo } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    searchDisabled: state.searchDisabled
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchInput: (value) => {
      dispatch(dispatch(enableSearch(value)))
    },
    onFormSubmit: (value) => {
      dispatch(selectLocation(value))
      dispatch(fetchInfo(value))
    }
  }
}

const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchBar
