import React from 'react'

function Child(props) {
  return (
    <div>
      <h1>I am a child</h1>
      <h1>My parent's number is {props.num}</h1>
      <p>{props.tree}</p>
      <button onClick={props.handleClick}>increase parent's number</button>
      <AnotherComponent color="blue"/>
      <AnotherComponent color="green"/>
    </div>
  )
}

function AnotherComponent(props) {
  return (
    <div>
      <h1 style={{backgroundColor: props.color }}>{props.color}</h1>
    </div>
  )
}

export default Child