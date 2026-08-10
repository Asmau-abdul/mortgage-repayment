import React, { useState } from 'react'
import '../styles/mortgageCalculator.scss'

const MortgageCalculator = () => {
    const [amount, setAmount] = useState('')
    const [term, setTerm] = useState('')
    const [rate,setRate] = useState('')
    const [type, setType] = useState(null)
    const [error, setError] = useState({
        amount: false,
        term: false,
        rate: false,
        type: false
    })

    const handleCalculation = () => {
        if (amount.trim() === ''){
            setError((prev) => ({...prev, amount: true}))
        }else{
            setError((prev) => ({...prev, amount: false}))
        }

        if (term.trim() === ''){
            setError((prev) => ({...prev, term: true}))
        }else{
            setError((prev) => ({...prev, term: false}))
        }

        if (rate.trim() === ''){
            setError((prev) => ({...prev, rate: true}))
        }else{
            setError((prev) => ({...prev, rate: false}))
        }

        const checking = Object.values(error)
        console.log(checking)
    }

  return (
    <>
        <div className='mortgage-calculator'>
            <div className='title-header'>
                <h1>Mortgage Calculator</h1>
                <button>Clear All</button>
            </div>

            <div className="form">
                <div className="amount">
                    <label htmlFor="mortgageAmount">Mortgage Amount</label>
                    <input type="number" name="" id="mortgageAmount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>

                <div className="term-rate">
                    <div className='term'>
                        <label htmlFor="term">Mortgage Term</label>
                        <input type="number" name="years" id="term" value={term} onChange={(e) => setTerm(e.target.value)}/>
                    </div>

                    <div className="rate">
                        <label htmlFor="rate">Interest Rate</label>
                        <input type="number" name="rate" id="rate" value={rate} onChange={(e) => setRate(e.target.value)}/>
                    </div>
                </div>

                <label htmlFor="type">Mortgage Type</label>
                <div className='repayment'>
                    <input type="radio" name="type" value="repayment" id='repayment' onChange={(e) => setType(e.target.value)}/>
                    <label htmlFor="repayment">Repayment</label>
                </div>
                <div className="interest">
                    <input type="radio" name="type" value="interest" id='interest' onChange={(e) => setType(e.target.value)}/>
                    <label htmlFor="interest">Interest Only</label>
                </div>

                <button className='calcBtn' onClick={handleCalculation}> Calculate Repayments</button>
            </div>
        </div>
    </>
  )
}

export default MortgageCalculator