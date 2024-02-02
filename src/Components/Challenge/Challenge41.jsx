// You are tasked with implementing a React component for OTP login. The login process involves entering an email, verifying it, and then entering an OTP for authentication.

import React, { useState } from 'react';
import OTPInput from 'react-otp-input';
import { ColorRing } from 'react-loader-spinner';

const OtpLogin = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [error, setError] = useState('');
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [loading, setLoading] = useState(false);

    const validateEmail = (email)=>{
        // Basic email validation check (replace with a more comprehensive solution if needed)
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        return isValidEmail
    }

    const handleEmailVerification = ()=>{
        if (validateEmail(email)) {
            setLoading(true);
            setTimeout(() => {
                setIsEmailVerified(true);
                setLoading(false);
                setError('');
            }, 2000);
        }
        else{
            setError("Invalid Email");
        }
    }

    const handleOTPVerification = ()=>{
        const enteredOTP = otp.join('');
        if (/^\d{4}$/.test(enteredOTP)) {
            const username = email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1);
            onLogin(username)
        }
        else{
            setError("Incorrect OTP")
        }
    }

    return (
        <div className='otp-div'>
            {
                !isEmailVerified ? (
                    <>
                        <h1 className='otp-heading'>
                            Enter Your Email:
                        </h1>
                        <input
                            type='text'
                            placeholder='test@example.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {
                            error && <span className='otp-error'>
                                {error}
                            </span>
                        }
                        <div>
                            <button onClick={handleEmailVerification} className='otp-verify-email'>
                               {
                                loading ? (
                                    <ColorRing color="#fff" height={50} width={50}/>
                                ): (
                                    'Verify Email'
                                )
                               }
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className='otp-heading'>
                            Enter Your OTP:
                        </h1>
                        <div className='otp-input-container'>
                            <OTPInput
                                value={otp.join('')}
                                onChange={(value)=> setOtp(value.split(''))}
                                numInputs={4}
                                isInputNum
                                inputStyle={{
                                    width: '3rem',
                                    height: '3rem',
                                    margin: '0 0.2rem',
                                    fontSize: '1.5rem',
                                    borderRadius : '4px',
                                    border: '1px solid #ced4da'
                                }}
                                renderInput={(inputProps, index) => <input {...inputProps} key={index}/>}
                            />
                        </div>
                        {
                            error && <span className='otp-error'>
                                {error}
                            </span>
                        }
                        <div>
                            <button onClick={handleOTPVerification} className='otp-login'>
                                Login
                            </button>
                        </div>


                    </>
                )
            }
        </div>
    )
}

const Challenge41 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (username) => {
        setIsLoggedIn(true);
        setUsername(username)
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
    }
    return (
        <section className='timeline-landing'>
            <div className='row container'>
                {
                    isLoggedIn ? (
                        <div className='otp-div'>
                            <h1 className='otp-heading'>
                                Welcome, {username}
                            </h1>
                            <button onClick={handleLogout} className='otp-login'>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <OtpLogin onLogin={handleLogin} />
                    )
                }
            </div>
        </section>
    )
}

export default Challenge41