import React from 'react'
import { slugify } from '../utils/utils'

const ResultMessage = ({ selectedCity, previousLocations }) => {
  let locationResults = previousLocations[slugify(selectedCity)]

  if (locationResults) {
    let resultsError = locationResults.error

    return (
      <div>
        {resultsError ? (
          <div className="alert" style={{ backgroundColor: "#FB8686" }}>
            {resultsError}
          </div>
          ) : (
          <div className="alert" style={{ backgroundColor: locationResults.locationData.color }}>
            {locationResults.locationData.quality} for {selectedCity}
          </div>
        )}
      </div>
    )
  }

  return (<div></div>)
}

export default ResultMessage
