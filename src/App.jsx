import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MortgageCalculator from './components/MortgageCalculator'

function App() {
  const [results, setResults] = useState(null)

  return (
    <>
      <div>
        <MortgageCalculator/>
      </div>
    </>
  )
}

export default App
