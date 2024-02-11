import React from 'react'

const ExpenseList = ({expenses, deleteExpense}) => {
  return (
    <div className='mt-4'>
        <h2 className='heading-text'>
            Expense List
        </h2>
        <ul>
            {expenses.length > 0 ? expenses.map((expense)=>(
                <li key={expense.id} className='heading-text mt-2'>
                    {expense.description} - ${expense.amount}
                    <button className='btn btn-danger mx-2' onClick={()=> deleteExpense(expense.id)}>
                        Delete
                    </button>
                </li>
            )):
            <p className='heading-text'>
                No expenses found!
            </p>
            }
        </ul>
    </div>
  )
}

export default ExpenseList