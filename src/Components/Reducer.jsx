import React, { useReducer } from 'react'

const Reducer = () => {
    const handleCounter = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return { count: state.count + 1 }
            case 'DECREMENT':
                return { count: state.count - 1 }
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(handleCounter, { count: 0 });

    const handleIncrement = () => {
        dispatch({ type: 'INCREMENT' })
    }
    const handleDecrement = () => {
        dispatch({ type: 'DECREMENT' })
    }
    return (
        <section className='landing-section'>
            <div className='row container'>
                <div className='landing-div'>
                    <button onClick={handleIncrement} className='btn btn-primary'>Increase Count</button>
                    <h1 className='landing-heading'>Count: {state.count}</h1>
                    <button onClick={handleDecrement} className='btn btn-primary'>Decrease Count</button>
                </div>
            </div>
        </section>
    )
}

export default Reducer