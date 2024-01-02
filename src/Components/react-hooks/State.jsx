// React Hooks are a feature introduced in React 16.8 that allow functional components to manage state, side effects, and other React features without writing a class. They provide a more concise and intuitive way to work with component logic, making it easier to share and reuse code.



// In React, useState is one of the built-in hooks that allows you to add state to functional components. State is a way to store and manage data that can change over time and trigger component re-renders when it does change. Prior to the introduction of hooks, state management was primarily done in class components, but hooks make it possible to manage state in functional components as well.


import React, { useState } from 'react'

const State = () => {
    const [likes, setLikes] = useState(0);

    const handleClickIncrease = () => {
        setLikes(likes + 1);
        console.log('like increase');
    }
    const handleDecreaseLike = () => {
        if (likes > 0) {
            setLikes(likes - 1);
            console.log('like decrease');
        }
    }
    return (
        <section className='landing-section'>
            <div className='row container'>
                <div className='landing-div'>
                    <button onClick={handleClickIncrease} className='btn btn-primary'>Increase Like</button>
                    <h1 className='landing-heading'>Likes: {likes}</h1>
                    <button onClick={handleDecreaseLike} className='btn btn-primary'>Decrease Like</button>
                </div>
            </div>
        </section>
    )
}

export default State
