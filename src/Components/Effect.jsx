// The useEffect hook is a crucial part of React's functional component system, designed to manage side effects in your components. Side effects are actions that occur outside the typical data flow of your application, such as data fetching, DOM manipulation, or setting up subscriptions. useEffect allows you to perform these side effects in a controlled and declarative manner, ensuring your component remains in sync with the data and the environment.

// Using useEffect, you can manage asynchronous actions, integrate with external libraries, and handle various side effects in a predictable and declarative way within your React components.

import React, { useEffect } from 'react';

const data = console.log('from useEffect');

const Effect = () => {
  useEffect(() => {
    data

    return () => {
      data
    }
  }, [])

  return (
    <section className='landing-section'>
      <div className='row container'>
        <div className='landing-div'>
          <h1 className='landing-heading'>useEffect</h1>
        </div>
      </div>
    </section>
  )
}

export default Effect