import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AboutPage from './Components/AboutPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AboutPage/>
    </div>
  )
}

export default App
