import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15;
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  }

  function remValue() {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {counter} </h2>
      <button
      onClick={addValue}
      >Add value</button> { }
      <button
      onClick={remValue}
      >Remove value</button>
    </>
  )
}

export default App
