// @flow

import React, { Component } from 'react'
import './Search.css'
import shows from './shows.json'
import MovieCard from './MovieCard'

class Search extends Component {

  state = { searchTerm: '' }

  // Another option, more succint: (event: Event & {target: HTMLInputElement})
  performSearch = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ searchTerm: event.target.value })
    } else {
      throw new Error("Unexpected event.target type!")
    }
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
