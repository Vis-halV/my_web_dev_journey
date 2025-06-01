import { useState } from 'react'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-white text-black p-3 rounded-md'>Card</h1>

      <Card />
    </>
  )
}

export default App
