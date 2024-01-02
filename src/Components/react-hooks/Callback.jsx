
// In React, the useCallback hook is a way to optimize and improve the performance of your application. It's used to create a memoized version of a function. Let me break that down:



// Memoized Version: When you memoize a function, it means that React will remember the function you create, and it will give you the same function instance as long as its dependencies don't change. This can be useful to avoid unnecessary re-renders of components.

// Function: You pass a regular JavaScript function as an argument to useCallback.

// Dependencies: You also pass an array of dependencies to useCallback. The function you pass will only be recreated when these dependencies change.


import React, { useState, useCallback } from 'react'

const Callback = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const optimise = useCallback(increment, [count]);


    return (

        <section className='landing-section'>
            <div className='row container'>
                <div className='landing-div'>
                    <h1 className='landing-heading'>Count: {count}</h1>
                    <button onClick={optimise} className='btn btn-primary'>Increment</button>
                </div>
            </div>
        </section>
    )
}

export default Callback