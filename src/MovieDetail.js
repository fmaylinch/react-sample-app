// @flow

import React from 'react'
import { Link } from 'react-router-dom'

const MovieDetail = (props: {show: Movie}) => (
  <div>
    <Link to='/search'>Back to search</Link>
    <h1>{props.show.name}</h1>
    <p>{props.show.overview}</p>
    <p>
      <img src={"http://image.tmdb.org/t/p/w300" + props.show.poster_path} alt={props.show.name} />
    </p>
    <pre>
      { JSON.stringify(props, null, 4) }
    </pre>
  </div>
)

export default MovieDetail
