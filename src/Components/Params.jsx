// In React, the useParams hook is a part of the React Router library, which allows you to work with dynamic route parameters in your application. It is typically used in conjunction with the <Route> component to access and extract parameters from the URL.

import React from 'react'
import { useParams } from 'react-router-dom'

const Params = () => {
    const { id } = useParams()
    return (
        <section className='landing-section'>
            <div className='row container'>
                <div className='landing-div'>
                    <h1 className='landing-heading'>User Id: {id}</h1>
                </div>
            </div>
        </section>
    )
}

export default Params