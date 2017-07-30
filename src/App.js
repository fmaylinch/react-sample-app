import React from 'react'

const App = () => <Title text='This is a title'/>

const Title = (props) => <h1 className='title'>{props.text}</h1>

export default App
