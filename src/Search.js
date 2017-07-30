import React from 'react'
import data from './data.json'

const Search = (props) => (
  <div>
    <h2>data.json</h2>
    <pre>{JSON.stringify(data, null, 4)}</pre>
  </div>
)

export default Search
