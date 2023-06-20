import React, {useState} from 'react';

 export default function App() {

  //@param "count" is the current state
  //@param "setCount" allows you to update state

  const [count, setCount] = useState(4);

  function incrementCount() {
    setCount( preCount => preCount + 1)
  }

  function decrementCount() {
    setCount( preCount => preCount - 1)
  }
  return (
    <>
    
    <button onClick = {decrementCount}>-</button>
    <span>{count}</span>
    <button onClick= {incrementCount}>+</button>
    
    </>
  )
}