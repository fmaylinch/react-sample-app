import React, { Component } from 'react'
import './Search.css'
import shows from './shows.json'
import MovieCard from './MovieCard'

class Search extends Component {

  state = { searchTerm: '' }

  performSearch = (event) => {
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
