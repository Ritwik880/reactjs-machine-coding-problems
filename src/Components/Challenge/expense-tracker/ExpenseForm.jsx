import React, {useState} from 'react'

const ExpenseForm = ({addExpense}) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (!description || !amount) {
            alert('Please enter both description and amount.')
            return;
        }

        const newExpense = {
            id: new Date().getTime(),
            description,
            amount: parseFloat(amount)
        };

        addExpense(newExpense);

        setDescription('');
        setAmount('');
    }


  return (
    <form onSubmit={handleSubmit}>
        <label className='heading-text'>
            Description:
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)}/>
        </label>
        <label className='heading-text'>
            Amount:
            <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)}/>
        </label>

        <button type='submit'>
            Add Expense
        </button>
    </form>
  )
}

export default ExpenseForm