// Create a React component that represents an auto-increment counter. The counter should have a "Start/Pause" button that toggles between starting and pausing the counter. The counter should increment by 1 every second when in the "Start" mode and should stop incrementing when in the "Pause" mode.

import React, { useState, useEffect } from 'react'

const Challenge44 = () => {
    const [count, setCount] = useState(0);
    const [isIncrementing, setIsIncrementing] = useState(false);

    const toggleIncrementing = () => {
        setIsIncrementing(!isIncrementing);
    }

    const incrementCounter = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        let interval;
        if (isIncrementing) {
            interval = setInterval(incrementCounter, 10)
        }
        return () => clearInterval(interval)
    }, [isIncrementing, count])

    return (
        <section className='timeline-landing'>
            <div className='row container'>
                <h1 className='landing-heading'>
                    Counter: {count}
                </h1>
                <div className='d-flex justify-content-center'>
                    <button onClick={toggleIncrementing} className=''>
                        {isIncrementing ? 'Pause' : 'Start'}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Challenge44