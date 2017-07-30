import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Landing from './Landing'
import About from './About'

const App = () => (
  <HashRouter>
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/about' component={About} />
    </div>
  </HashRouter>
)

export default App
