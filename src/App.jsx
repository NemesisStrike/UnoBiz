import { useState } from 'react'
import './App.css'
import { SteteContext } from './context/state'
import Routing from './routes/route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SteteContext>
        <Routing/>
      </SteteContext>
    </>
  )
}

export default App
