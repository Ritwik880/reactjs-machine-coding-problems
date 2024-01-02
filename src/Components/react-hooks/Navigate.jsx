// The useNavigate hook is a part of the React Router library (React Router v6 and later). It is used for programmatic navigation in your React applications. Instead of using the traditional history.push method, which is commonly used in older versions of React Router, you can use the useNavigate hook to navigate to different routes within your application.

import React from 'react'
// import { useNavigate } from 'react-router-dom'

const Navigate = () => {

  // const navigate = useNavigate();

  const handleNavigate = () => {
    // navigate('/user/3')
  }
  return (
    <section className='landing-section'>
      <div className='row container'>
        <div className='landing-div'>
          <button onClick={handleNavigate} className='btn btn-primary'>Navigate</button>
        </div>
      </div>
    </section>
  )
}

export default Navigate