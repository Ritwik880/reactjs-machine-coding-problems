// You are tasked with building an expense sharing application in React.js. The application should allow users to add expenses, delete expenses, and view a balance summary.

import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import BalanceSummary from './BalanceSummary';

const ExpenseTracker = () => {
    const [expenses, setExpenses] = useState([]);

    //add expense
    const addExpense = (newExpenses) => {
        setExpenses([...expenses, newExpenses]);
    }

    //delete expense
    const deleteExpense = (id)=>{
        const updateExpenses = expenses.filter((expense)=> expense.id !== id);
        setExpenses(updateExpenses);
    }
    return (
        <section className='timeline-landing'>
            <div className='row container'>
                <h1 className='heading-text'>
                    Expense Tracker
                </h1>
                <ExpenseForm addExpense={addExpense} />
                <ExpenseList expenses={expenses} deleteExpense={deleteExpense}/>
                <BalanceSummary expenses={expenses}/>
            </div>
        </section>
    )
}

export default ExpenseTracker