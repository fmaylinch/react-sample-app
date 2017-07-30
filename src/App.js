import React from 'react';

const App = () => {
  return <Title text="This is a title" color="forestgreen"/>
}

const Title = (props) => {
  return <h1 style={{color: props.color}}>{props.text}</h1>
}

export default App;
