import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing'
import About from './About'

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={Landing} />
      <Route path='/about' component={About} />
    </div>
  </BrowserRouter>
)

export default App
