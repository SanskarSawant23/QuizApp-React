import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './Components/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Quiz></Quiz>
    </>
  )
}

export default App
