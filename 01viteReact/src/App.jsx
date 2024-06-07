
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]=useState(15)

  const incValue = ()=>{
    setCounter(counter+1);
  }

  const decValue = ()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Basic React App</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={incValue}>Increase Value {counter}</button>
      <button onClick={decValue}>Reduce Value {counter}</button>
      <p>Updated value: {counter}</p>
    </>
  )
}

export default App
