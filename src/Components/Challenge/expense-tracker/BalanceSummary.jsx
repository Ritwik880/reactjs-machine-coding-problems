import React from 'react'

const BalanceSummary = ({expenses}) => {

    const calculateTotalBalance = ()=>{
        return expenses.reduce((total, expense)=> total + expense.amount, 0)
    }
  return (
    <div>
        <h2 className='heading-text'>
            Balance Summary
        </h2>
        <p className='heading-text'>
            Total Balance: ${calculateTotalBalance()}
        </p>
    </div>
  )
}

export default BalanceSummary