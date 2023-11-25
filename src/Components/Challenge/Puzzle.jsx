// Conditional Rendering Puzzle: Build a React component that renders "Hello, World!" initially. After 5 seconds, change the text to "Goodbye, World!" without using any external state management libraries or timers.

import React, {useState, useEffect} from 'react'

const Puzzle = () => {
  const [message, setMessage] = useState('Hello, World!');

  useEffect(() => {
    const timer = setTimeout(()=>{
      setMessage('Goodbye, World!')
    }, 5000)
    return() => clearTimeout(timer);
  }, [])
  
  return (
    <div>
      <h1>
        Message: {message}
      </h1>
    </div>
  )
}

export default Puzzle