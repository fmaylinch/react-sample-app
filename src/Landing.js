import React from 'react'
import { Link } from 'react-router-dom'

const Landing = (props) => (
  <div>
    <h1>Welcome to my React app</h1>
    <p>This app will be amazing!</p>
    <p>
      <Link to='/about'>About me</Link>
    </p>
    <p>
      <Link to='/broken'>Broken link</Link>
    </p>
  </div>
)

export default Landing
