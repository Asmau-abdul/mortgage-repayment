import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MortgageCalculator from './components/MortgageCalculator'
import MortgageResult from './components/MortgageResult'

function App() {
  const [results, setResults] = useState(null)

  return (
    <>
      <div className='mortgage'>
        <MortgageCalculator onCalculate={setResults}/>

        <MortgageResult results={results}/>
      </div>
    </>
  )
}

export default App
