import React from 'react'
import { slugify } from '../utils/utils'

const ResultsTable = ({ previousFiveLocations }) => {
  return (
    <table>
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
  )
}

export default ResultsTable
