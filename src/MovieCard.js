import React from 'react'
import './MovieCard.css'
import { shape, string, number } from 'prop-types'

const MovieCard = (props) => (
  <div className="movie-card">
    <h1>{props.show.name}</h1>
    <img src={"http://image.tmdb.org/t/p/w185" + props.show.poster_path} alt={props.show.name} />
    <p>Score: {props.show.vote_average}</p>
  </div>
)

MovieCard.propTypes = {
  show: shape({
    name: string.isRequired,
    poster_path: string.isRequired,
    vote_average: number.isRequired
  }).isRequired
}

export default MovieCard
