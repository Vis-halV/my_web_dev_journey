import { useState } from 'react'
import './App.css'
import Card from './component/card'
import ResponsiveCard from './component/Responsive_card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-white text-black p-3 rounded-md'>Card</h1>

      <Card />
      <ResponsiveCard username='Vishal V' qoute='Blending code, art, and design.'  />
      <ResponsiveCard />
    </>
  )
}

export default App
