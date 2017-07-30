import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Landing from './Landing'

const App = () => (
  <HashRouter>
    <div>
      <Route exact path='/' component={Landing} />
    </div>
  </HashRouter>
)

export default App
