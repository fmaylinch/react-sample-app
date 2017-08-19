// @flow

import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = (props: {show: Movie}) => {

  const show = props.show

  return (
    <Link to={'/detail/' + show.id}>
      <div className="movie-card">
        <h1>{props.show.name}</h1>
        <img src={"http://image.tmdb.org/t/p/w185" + show.poster_path} alt={show.name} />
        <p>Score: {show.vote_average}</p>
      </div>
    </Link>
  )
}

export default MovieCard
