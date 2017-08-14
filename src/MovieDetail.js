import React from 'react'

const MovieDetail = (props) => (
  <div>
    <h1>[movie name]</h1>
    <p>[details of movie {props.match.params.id}]</p>
    <pre>
      { JSON.stringify(props, null, 4) }
    </pre>
  </div>
)

export default MovieDetail
