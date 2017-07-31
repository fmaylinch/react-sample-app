import React, { Component } from 'react'
import data from './data.json'

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = { searchTerm: '' }

    // binding in the constructor
    // https://facebook.github.io/react/docs/handling-events.html
    this.performSearchBinded = this.performSearchBinded.bind(this)
  }

  // This method is binded in the constructor
  performSearchBinded(event) {
    console.log("performSearchBinded")
    this.setState({ searchTerm: event.target.value })
  }

  // This method is not binded, so we have to use inline binding or arrow function
  performSearchNotBinded(event) {
    console.log("performSearchNotBinded")
    this.setState({ searchTerm: event.target.value })
  }

  // property initializer syntax
  // https://facebook.github.io/react/docs/handling-events.html
  performSearch = (event) => {
    console.log("performSearch")
    this.setState({ searchTerm: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Films</h1>

        NOT recommended:
        <br/>
        <input type="text" placeholder="Search"
          value={this.state.searchTerm} onChange={this.performSearchNotBinded.bind(this)}
        /> Inline bind (binding each time is slow)
        <br/>
        <input type="text" placeholder="Search"
          value={this.state.searchTerm} onChange={(e) => this.performSearchNotBinded(e)}
        /> Arrow function (might do an extra re-rendering)
        <br/><br/>

        Recommended:
        <br/>
        <input type="text" placeholder="Search"
          value={this.state.searchTerm} onChange={this.performSearchBinded}
        /> Binding in the constructor
        <br/>
        <input type="text" placeholder="Search"
          value={this.state.searchTerm} onChange={this.performSearch}
        /> <strong>Property initializer syntax</strong> (looks like the way to go)

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
