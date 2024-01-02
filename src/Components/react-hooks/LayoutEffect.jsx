// useLayoutEffect is very similar to useEffect.

// useLayoutEffect ko humlog whan use krte hain jhan pe hume changes turant chahiye dom me after the render.

// useLayoutEffect ek synchronous call hota hai jo browser ko UI update krne se block kr skta hai agar dom load hone me time laga rha hai to.

// useLayoutEffect call hoga immediately after the dom has been updated and before the browser paints the screen

// hum isse tab use krte hain jhan pe side effect ko perform krna hai before the user sees any changes on the screen. useLayoutEffect hum tab use krenge jhn pe hume ya to measure krna hai kuch jaise width, height etc aur ya to interact krna hai dom ke saath me after the render.


// Differences
// useEffect: It is typically used for side effects that don't need to be immediately reflected in the UI, such as data fetching, event listeners, and other asynchronous tasks. Since it runs after the render, it's safe to use for most scenarios.

// useLayoutEffect: It is used when you need to make changes to the DOM or query the DOM immediately after a render. This is important when you need to measure or interact with DOM elements that must be up-to-date right after a render. For example, if you're updating the layout or position of elements based on their dimensions, you might use useLayoutEffect.

import React, { useState, useRef, useLayoutEffect } from 'react'

const LayoutEffect = () => {
    const [width, setWidth] = useState(null);
    const containerRef = useRef();

    useLayoutEffect(() => {
      const newWidth = containerRef.current.clientWidth;
      if (newWidth > 600) {
        containerRef.current.style.backgroundColor = 'green'
      }
      else{
        containerRef.current.style.backgroundColor = 'red'
      }
    
      setWidth(newWidth)
    }, [])

    return (
        <section className='landing-section'>
            <div className='row container'>
                <div ref={containerRef}>
                    <h1 className='landing-heading'>Element width: {width}</h1>
                </div>
            </div>
        </section>
    )
}

export default LayoutEffect

