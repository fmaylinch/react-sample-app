import React from 'react'

const MovieCard = (props) => (
  <div>
    <p><strong>{props.show.name}</strong> - {props.show.first_air_date}</p>
  </div>
)

export default MovieCard
