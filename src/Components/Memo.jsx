// The useMemo hook in React is used to memoize the result of a computation so that it's only recomputed when the dependencies of that computation change. It's a performance optimization tool for preventing unnecessary re-renders and expensive calculations in your React components.

// useMemo takes two arguments:

// A function that computes a value.
// An array of dependencies.


// Expensive Computations: You can use useMemo to calculate values that are computationally expensive and would not need to be re-calculated on every render. For example, complex mathematical operations or data transformations.

// Memoization of Callbacks: It's often used with callbacks or event handlers to prevent unnecessary re-creation of those functions, which can lead to inefficient rendering in child components.

import React, { useState, useMemo } from 'react';

function Fibonacci({ n }) {
    
    const calculateFibonacci = (num) => {
        if (num <= 1) return num;
        return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
    };

    const result = useMemo(() => {
        console.log(`Calculating Fibonacci(${n})`);
        return calculateFibonacci(n);
    }, [n]);

    return (
            <h1 className='landing-heading'>Fibonacci({n}) is {result}</h1>
    );
}

function Memo() {
    const [number, setNumber] = useState(10);

    return (
        <section className='landing-section'>
            <div className='row container'>
                <div className='landing-div'>
                    <button onClick={() => setNumber(number + 1)} className='btn btn-primary large-btn'>Calculate Next Fibonacci</button>
                    <Fibonacci n={number} />
                </div>
            </div>
        </section>
    );
}

export default Memo;
