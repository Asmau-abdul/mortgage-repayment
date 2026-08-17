import React from 'react'
import emptyResult from '../assets/images/illustration-empty.svg'
import '../styles/mortgageResult.scss'

const MortgageResult = ({results}) => {
  return (
    <>
        <div className='mortgage-result'>
            <div>
            { !results && <div className='empty-result'>
                <img src={emptyResult} alt="No results yet" className='empty-icon'/>
                <h2>Result shown here</h2>
                <p>Complete the form and click "calculate repayments" 
                    to see what your monthly repayments would be</p>
            </div>}
            
            { results && (
                <>
                    <div className="completed-result">
                        <div className='result-writeup'>
                            <h2>Your results</h2>
                            <p>Your results are shown based on the 
                                information you provided. To adjust the results, 
                                edit the form and click "calculate repayments" again.
                            </p>
                        </div>

                        {results.type === 'repayment' ? (
                            <div className="final-result">
                                <p>Your monthly repayments</p>
                                <h1>£{results.monthly}</h1>

                                <hr />

                                <p>Total you'll repay over the term</p>
                                <h2>£{results.total}</h2>
                            </div>
                        ) : (
                            <div className="final-result">
                                <p>Your monthly repayments</p>
                                <h1>£{results.monthly}</h1>
                            </div>
                        )}
                        
                        
                    </div>
                </>
            )}
            </div>
        </div>
    </>
  )
}

export default MortgageResult