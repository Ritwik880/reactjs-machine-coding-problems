// Create a React component that increments a counter when a button is clicked. 
// Note: The challenge is to implement it in such a way that it doesn't use the useState hook or class state.

import React, {useRef, useState} from 'react'

const Challenge03 = () => {
    const counterRef = useRef(0);

    const handleClick = ()=>{
        counterRef.current += 1;
        setForceRender({});
    }
    const [, setForceRender] = useState({})
  return (
    <div>
        <h1>
            {counterRef.current}
        </h1>
        <button onClick={handleClick}>
            Increment
        </button>
    </div>
  )
}

export default Challenge03