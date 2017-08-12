// @flow

import React from 'react'
import './MovieCard.css'

const MovieCard = (props: {
  show: {
    name: string,
    poster_path: string,
    vote_average: number
  }
}) => (
  <div className="movie-card">
    <h1>{props.show.name}</h1>
    <img src={"http://image.tmdb.org/t/p/w185" + props.show.poster_path} alt={props.show.name} />
    <p>Score: {props.show.vote_average}</p>
  </div>
)

export default MovieCard
