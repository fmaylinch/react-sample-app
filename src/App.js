import React from 'react';

const App = () => {
  return <Title text='This is a title'/>
}

const Title = (props) => {
  return <h1 className='title'>{props.text}</h1>
}

export default App;
