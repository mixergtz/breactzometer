import React from 'react'
import { slugify } from '../utils/utils'

const ResultsTable = ({ previousFiveLocations }) => {
  if(previousFiveLocations.length > 0){
    return (
      <div>
        <h2> Last Searches </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Air Quality</th>
            </tr>
          </thead>
          <tbody>
            { previousFiveLocations.map((location) =>
              <tr key={slugify(location.name)}>
                <td>{location.name}</td>
                <td>{location.locationData.quality}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }

  return (<div></div>)
}

export default ResultsTable
