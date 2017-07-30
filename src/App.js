import React from 'react';

const App = function () {
  return <Title text="This is a title" color="forestgreen"/>
}

const Title = function (props) {
  return <h1 style={{color: props.color}}>{props.text}</h1>
}

export default App;
