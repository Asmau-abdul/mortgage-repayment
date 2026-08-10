import React, { useState } from 'react'
import '../styles/mortgageCalculator.scss'

const MortgageCalculator = () => {
    const [amount, setAmount] = useState('')
    const [term, setTerm] = useState('')
    const [rate,setRate] = useState('')
    const [type, setType] = useState('')
    const [error, setError] = useState({
        amount: false,
        term: false,
        rate: false,
        type: false
    })

    const repay = (P, r, n) => {
        const R = r / 100 / 12
        const N = n * 12
        const top = P * (R * Math.pow((1+R),N))
        const bottom = Math.pow((1+R),(N-1))
        console.log(top/bottom)
        return top/bottom
    }

    const interestOnly = (P, r) => {
        const R = r / 100 /12
        return P * R
    }
    
    const handleCalculation = () => {
        const newErrors = {
            amount: amount.trim() === '',
            term: term.trim() === '',
            rate: rate.trim() === '',
            type: type === ''
        }
        setError(newErrors)

        const checking = Object.values(newErrors).some(Boolean)
        console.log(checking)
        if(checking){
            return
        }

        
        console.log(amount, term, rate, type)
        if(type === 'repayment'){
            repay(Number(amount), Number(rate), Number(term))
        }
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