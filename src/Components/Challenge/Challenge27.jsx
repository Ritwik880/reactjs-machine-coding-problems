// You are tasked with implementing a simple authentication system in a React.js application using a custom hook called useAuth. The useAuth hook should handle user authentication and provide the necessary functions and states.

// Create a React component that uses the useAuth hook. The component should:

// Display a login form with name, email ,password, and a login button.
// Show a welcome message and a logout button when the user is authenticated.
// Display a loading message while the authentication status is being checked.

import React, { useState } from 'react'
import useAuth from '../react-custom-hook/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Challenge27 = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user, login, logout, isAuthenticated, loading } = useAuth();

    const handleLogin = () => {
        // Implement your code here to call the signIn method of useAuth
        if (!name.trim() || !email.trim() || !password.trim()) {
            toast.error('Please fill in all the details!');
            return;
        }

        //Validate email
        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailReg.test(email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        //validation for name field
        if (name.length < 3) {
            toast.error('Name should be at least 3 characters long');
            return;
        }

        //validation for password field
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters long');
            return;
        }

        const isAuthenticated = login(name, email, password);

        if (isAuthenticated) {
            setName('');
            setEmail('');
            setPassword('');
        }
        else {
            toast.error('Authentication failed!');
        }



    }
    return (
        <section className="landing-section">
            <div className="row container">
                <ToastContainer position="top-center"
                    autoClose={1500} />
                {loading && <h1 className='landing-heading'>Loading...
                </h1>}
                {
                    !loading && (
                        <>
                            {isAuthenticated ? (
                                <div className='form'>
                                    <h1 className="landing-heading">
                                        Welcome, {user.name}!
                                    </h1>
                                    <div className="d-flex justify-content-center">
                                        <button onClick={logout} className='btn btn-danger'>
                                            Logout
                                        </button>
                                    </div>
                                </div>) : (
                                <div className="form">
                                    <h1 className='landing-heading'>
                                        Please login:
                                    </h1>
                                    <div className="mb-3">
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' className='form-control' />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' className='form-control' />
                                    </div>
                                    <button onClick={handleLogin} className='btn btn-success'>
                                        Login
                                    </button>
                                </div>
                            )}
                        </>
                    )
                }

            </div>
        </section>
    )
}

export default Challenge27