import React, { Component } from 'react'
import shows from './shows.json'
import MovieCard from './MovieCard'

class Search extends Component {

  state = { searchTerm: '' }

  performSearch = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div>
        <h1 className="title">Shows</h1>
        <input type="text" placeholder="Search"
          value={this.state.searchTerm} onChange={this.performSearch} />
        { shows
          .filter(show => show.name.toLowerCase().indexOf(this.state.searchTerm) >= 0)
          .map(show => <MovieCard show={show} />)
        }
      </div>
    )
  }
}

export default Search
