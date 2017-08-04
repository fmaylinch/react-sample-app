import React, { Component } from 'react'
import data from './data.json'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = { searchTerm: '' }
  }

  // property initializer syntax
  // https://facebook.github.io/react/docs/handling-events.html
  performSearch = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Films</h1>
        <input type="text" placeholder="Search"
          value={this.state.searchTerm} onChange={this.performSearch} />
        <ul>
          { data
            .filter(film => film.title.toLowerCase().indexOf(this.state.searchTerm) >= 0)
            .map(film => <li key={film.id}>{film.title}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default Search
