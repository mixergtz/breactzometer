import React from 'react'
import { slugify } from '../utils/utils'

const ResultMessage = ({ selectedCity, previousLocations }) => {
  let locationResults = previousLocations[slugify(selectedCity)]

  if (locationResults) {
    let resultsError = locationResults.error

    return (
      <div>
        {resultsError ? (
          <span style={{ backgroundColor: "red" }}>
            {resultsError}
          </span>
          ) : (
          <span style={{ backgroundColor: locationResults.locationData.color }}>
            {locationResults.locationData.quality} for {selectedCity}
          </span>
        )}
      </div>
    )
  }

  return (<div></div>)
}

export default ResultMessage
