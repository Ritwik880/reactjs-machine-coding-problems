// The useRef hook in React is a built-in hook that allows you to create and manage references to DOM elements and other mutable values in functional components. It provides a way to access and interact with the real DOM elements, manage focus, and maintain mutable values without causing re-renders.

// useRef is a hook in React that allows you to create a mutable reference to a DOM element or to persist values across renders without causing re-renders

import React, {useRef, useEffect} from 'react'

const Ref = () => {
  // const initialValue = null;
  const ref = useRef(null);

  const handleClick = ()=>{
    console.log(ref.current);
    ref.current.focus();
  }

  useEffect(() => {
    handleClick();
  }, [])
  

  return (
    <section className='landing-section'>
    <div className='row container'>
        <div className='landing-div'>
            <div className="mb-3">
              <input type="text" className="form-control" ref={ref}/>
            </div>
            <button className='btn btn-primary' onClick={handleClick}>Click me</button>
        </div>
    </div>
</section>
  )
}

export default Ref