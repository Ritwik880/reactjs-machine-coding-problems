import React, { useState, useEffect } from 'react'

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (name, email, password) => {
        if (name, email && password) {
            const userData = { email, name };
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            return true; //Authentication successful
        }
        else {
            return false; //Authentication failed
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

        setLoading(false);

    }, [])

    return { user, login, logout, isAuthenticated: !!user, loading }

}

export default useAuth