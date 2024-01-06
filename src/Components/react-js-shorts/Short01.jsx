import React, { useState } from 'react';

const Short01 = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h1>Welcome to My App</h1>
            {isLoggedIn ? (
                <p>You are logged in. Welcome back!</p>
            ) : (
                <p>Please log in to access the content.</p>
            )}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)} className='btn btn-primary'>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default Short01;
