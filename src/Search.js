// @flow

import React, { Component } from 'react'
import './Search.css'
import shows from './shows.json'
import MovieCard from './MovieCard'

class Search extends Component {

  state = { searchTerm: '' }

  // If we just declare `event: Event` and then check
  // `if (event.target instanceof HTMLInputElement)`
  // it will fail in Search.test.js because there we're actually
  // passing a fake event, not a HTMLInputElement.
  performSearch = (event: Event & {target: HTMLInputElement}) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div className="search">
        <h1>Shows</h1>
        <input type="text" placeholder="Search"
          value={this.state.searchTerm} onChange={this.performSearch} />
        <div>
          { shows
            .filter(show => show.name.toLowerCase().indexOf(this.state.searchTerm) >= 0)
            .map(show =>
              <MovieCard key={show.id} show={show} />
            )
          }
        </div>
      </div>
    )
  }
}

export default Search
