// @flow

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing'
import Search from './Search'
import About from './About'
import MovieDetail from './MovieDetail'
import shows from './shows.json'

const NotFound = () => <h1>Page not found 404</h1>

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/search' component={Search} />
        <Route path='/about' component={About} />
        <Route path='/detail/:id' component={
          (props) => <MovieDetail
            routerProps={props}
            show={shows.filter(x => x.id === Number(props.match.params.id))[0]} />
        } />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
