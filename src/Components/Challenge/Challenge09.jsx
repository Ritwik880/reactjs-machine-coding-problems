// Build a component that displays a message based on whether a user is logged in or not. Include a button that toggles the login state.

import React, {useState} from 'react'

const Challenge09 = () => {
    const [isLoggedin, setIsLoggedIn] = useState(false);
    const handleLogin = ()=>{
        setIsLoggedIn((prev)=> !prev)
    }
    const message = isLoggedin ? 'Welcome, User!' : 'Please login in to continue.';
  return (
    <section className="landing-section">
        <div className="row container">
            <h1 className='landing-heading'>
                {message}
            </h1>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-primary' onClick={handleLogin}>
                    {
                        isLoggedin ? 'Logout' : 'Login'
                    }
                </button>
            </div>
        </div>
    </section>
  )
}

export default Challenge09