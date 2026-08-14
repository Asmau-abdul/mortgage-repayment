import React, { useState } from 'react'
import '../styles/mortgageCalculator.scss'
import calculator from '../assets/images/icon-calculator.svg'

const MortgageCalculator = ({onCalculate}) => {
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

    const onClear = () => {
        setAmount('')
        setTerm('')
        setRate('')
        setType(null)
        setError({
            amount: false,
            term: false,
            rate: false,
            type: false
        })
        onCalculate(null)
    }

    const repay = (P, r, n) => {
        const R = r / 100 / 12
        const N = n * 12
        const top = P * (R * Math.pow((1+R),N))
        const bottom = Math.pow((1+R),N) - 1
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
            type: type === null
        }
        setError(newErrors)

        const checking = Object.values(newErrors).some(Boolean)
        
        if(checking){
            return
        }

        if(type === 'repayment'){
            const monthly = repay(Number(amount), Number(rate), Number(term))
            const total = monthly * (Number(term) * 12)
            onCalculate({
                type: 'repayment',
                monthly: monthly.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2}),
                total: total.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})
            })
        }

        if(type === 'interest'){
            const total = interestOnly(Number(amount), Number(rate))
            onCalculate({
                type: 'interest',
                monthly: total.toLocaleString('en-GB', {minimumFractionDigits: 2, maximumFractionDigits: 2})
            })
        }
    }

  return (
    <>
        <div className='mortgage-calculator'>
            <div className='title-header'>
                <h1>Mortgage Calculator</h1>
                <button onClick={onClear}>Clear All</button>
            </div>

            <div className="form">
                <div className="amount">
                    <label htmlFor="mortgageAmount">Mortgage Amount</label>
                    <div className={`input-and-tag ${error.rate ? 'input-error' : ''}`}>
                        <p>£</p>
                        <input type="number" name="" id="mortgageAmount" value={amount} className={error.amount ? 'input-error' : ''} onChange={(e) => setAmount(e.target.value)}/>
                    </div>
                    {error.amount && <p className='error-message'>This field is required</p>}
                </div>

                <div className="term-rate">
                    <div className='term'>
                        <label htmlFor="term">Mortgage Term</label>
                        <div className={`input-and-tag ${error.rate ? 'input-error' : ''}`}>
                            <input type="number" name="years" id="term" value={term} className={error.term ? 'input-error' : ''} onChange={(e) => setTerm(e.target.value)}/>
                            <p>years</p>
                        </div>
                        {error.term && <p className='error-message'>This field is required</p>}
                    </div>

                    <div className="rate">
                        <label htmlFor="rate">Interest Rate</label>
                        <div className={`input-and-tag ${error.rate ? 'input-error' : ''}`}>
                            <input type="number" name="rate" id="rate" value={rate} onChange={(e) => setRate(e.target.value)}/>
                            <p>%</p>
                        </div>
                        {error.rate && <p className='error-message'>This field is required</p>}
                    </div>
                </div>

                <label htmlFor="type">Mortgage Type</label>
                <div className='repayment'>
                    <input type="radio" name="type" value="repayment" id='repayment' checked={type === 'repayment'} onChange={(e) => setType(e.target.value)}/>
                    <label htmlFor="repayment">Repayment</label>
                </div>
                <div className="interest">
                    <input type="radio" name="type" value="interest" id='interest' checked={type === 'interest'} onChange={(e) => setType(e.target.value)}/>
                    <label htmlFor="interest">Interest Only</label>
                </div>
                {error.type && <p className='error-message'>This field is required</p>}

                <button className='calcBtn' onClick={handleCalculation}> <img src={calculator} alt="" /> Calculate Repayments</button>
            </div>
        </div>
    </>
  )
}

export default MortgageCalculator