import React from 'react'
import '../styles/mortgageCalculator.scss'

const MortgageCalculator = () => {
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
                    <input type="number" name="" id="" />
                </div>

                <div className="term-rate">
                    <div className='term'>
                        <label htmlFor="term">Mortgage Term</label>
                        <input type="number" name="years" id="years" />
                    </div>

                    <div className="rate">
                        <label htmlFor="rate">Interest Rate</label>
                        <input type="number" name="rate" id="rate" />
                    </div>
                </div>

                <label htmlFor="type">Mortgage Type</label>
                <div className='repayment'>
                    <input type="radio" name="type" id="" />
                    <label htmlFor="repayment">Repayment</label>
                </div>
                <div className="interest">
                    <input type="radio" name="type" id="" />
                    <label htmlFor="interest">Interest Only</label>
                </div>

                <button className='calcBtn'> Calculate Repayments</button>
            </div>
        </div>
    </>
  )
}

export default MortgageCalculator